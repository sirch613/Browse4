const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { spawn } = require('node:child_process');
const fs = require('node:fs/promises');
const path = require('node:path');

const PRODUCT_NAME = 'browse';

let snapshotsDir = null;
let overlayServerProcess = null;
const OVERLAY_SERVER_PORT = 4333;

const startOverlayServer = () => {
  if (overlayServerProcess) {
    return;
  }

  const nextBinary = path.join(__dirname, 'overlay-app', 'node_modules', 'next', 'dist', 'bin', 'next');
  overlayServerProcess = spawn(process.execPath, [nextBinary, 'start', '-p', String(OVERLAY_SERVER_PORT), '-H', '127.0.0.1'], {
    cwd: path.join(__dirname, 'overlay-app'),
    env: {
      ...process.env,
      PORT: String(OVERLAY_SERVER_PORT),
      NEXT_TELEMETRY_DISABLED: '1',
      ELECTRON_RUN_AS_NODE: '1'
    },
    stdio: 'inherit'
  });

  overlayServerProcess.on('exit', (code, signal) => {
    overlayServerProcess = null;
    if (code && code !== 0) {
      console.error('Overlay server exited with code', code, 'signal', signal);
    }
  });
};

const stopOverlayServer = () => {
  if (overlayServerProcess) {
    overlayServerProcess.kill();
    overlayServerProcess = null;
  }
};

const ensureSnapshotsDir = async () => {
  if (snapshotsDir) {
    return snapshotsDir;
  }
  const dir = path.join(app.getPath('userData'), 'snapshots');
  await fs.mkdir(dir, { recursive: true });
  snapshotsDir = dir;
  return dir;
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: '#ffffff',
    title: PRODUCT_NAME,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 16, y: 8 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
      spellcheck: true
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  win.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });

  win.on('focus', () => {
    win.webContents.send('app:focused');
  });
};

app.whenReady().then(async () => {
  try {
    await ensureSnapshotsDir();
  } catch (error) {
    console.error('Failed to prepare snapshots directory', error);
  }

  try {
    startOverlayServer();
  } catch (error) {
    console.error('Failed to start overlay server', error);
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  stopOverlayServer();
});

ipcMain.handle('open-external', async (_event, url) => {
  if (!url) {
    return;
  }

  try {
    await shell.openExternal(url);
  } catch (error) {
    console.error('Failed to open external URL', url, error);
  }
});

ipcMain.handle('history:save-snapshot', async (_event, payload) => {
  if (!payload || typeof payload.url !== 'string' || typeof payload.dataUrl !== 'string') {
    return null;
  }

  try {
    const dir = await ensureSnapshotsDir();
    const match = /^data:image\/png;base64,(.+)$/i.exec(payload.dataUrl);
    if (!match) {
      return null;
    }

    const buffer = Buffer.from(match[1], 'base64');
    const safeSlug = payload.url.replace(/[^a-z0-9]+/gi, '_').slice(0, 80) || 'snapshot';
    const filename = `${Date.now()}_${safeSlug}.png`;
    const filePath = path.join(dir, filename);
    await fs.writeFile(filePath, buffer);
    return filePath;
  } catch (error) {
    console.error('Failed to save history snapshot', error);
    return null;
  }
});

ipcMain.on('set-window-title', (event, title) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  if (!window) {
    return;
  }

  const suffix = title ? ` — ${title}` : '';
  window.setTitle(`${PRODUCT_NAME}${suffix}`);
});
