import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appServe = app.isPackaged ? serve({
    directory: path.join(__dirname, "../out")
}) : null;

const createWindow = () => {
    const win = new BrowserWindow({
    width: 3840,
    height: 2160,
    fullscreen: true,
    webPreferences: {
        preload: path.join(__dirname, "preload.mjs")
    }
});

if (app.isPackaged) {
    appServe(win).then(() => {
        win.loadURL("app://-");
    });
} else {
    win.loadURL("http://localhost:3000");
    //win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
    win.webContents.reloadIgnoringCache();
    });
}
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});