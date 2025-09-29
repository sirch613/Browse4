const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('browseAPI', {
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  setWindowTitle: (title) => ipcRenderer.send('set-window-title', title),
  saveSnapshot: (payload) => ipcRenderer.invoke('history:save-snapshot', payload),
  onAppFocus: (callback) => {
    if (typeof callback !== 'function') {
      return () => {};
    }

    const listener = () => callback();
    ipcRenderer.on('app:focused', listener);

    return () => {
      ipcRenderer.removeListener('app:focused', listener);
    };
  }
});
