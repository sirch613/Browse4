# browse

Minimal macOS desktop browser powered by Electron/Chromium.

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app (opens a development build of the browser)
   ```bash
   npm run start
   ```

## Features

- Chromium rendering with sandboxed `webview`
- Minimal toolbar with back/forward/reload/home
- Address bar that accepts full URLs or search terms (DuckDuckGo)
- External window requests open in the default system browser

## Packaging for distribution

Create signed-but-not-notarized macOS artifacts (DMG + ZIP) with:
```bash
npm run dist
```
The build output is written to `dist/`. To ship a notarized build you will need to
provide Apple developer credentials (not yet wired into this project) or manually
notarize the generated artifacts.

### Customizing the installer

- Update `build.productName` in `package.json` if you change the app name.
- Supply a custom icon by adding `build.mac.icon` pointing to an `.icns` file.
- Adjust `build.mac.target` to emit PKG installers or omit the ZIP if unnecessary.

## Next steps

- Add brand assets (app icon, splash screen, default home page).
- Configure automatic updates (e.g., with electron-updater) if you need them.
- Integrate code signing + notarization credentials prior to distribution.
