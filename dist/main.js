"use strict";
const electron_1 = require("electron");
const path_1 = require("path");
class Test {
    constructor(app) {
        this.app = app;
        this.mainWindow = null;
        this.trayIcon = null;
        this.contextMenu = electron_1.Menu.buildFromTemplate([
            { label: 'hoge', type: 'radio' }
        ]);
        this.onWindowAllClosed = () => {
            this.app.quit();
        };
        this.onReady = () => {
            this.mainWindow = new electron_1.BrowserWindow({
                width: 1000,
                height: 800,
            });
            this.mainWindow.loadURL('file://' + path_1.resolve('./static/index.html'));
            this.mainWindow.on('closed', () => {
                this.mainWindow = null;
            });
            this.trayIcon = new electron_1.Tray(electron_1.nativeImage.createFromPath(path_1.resolve('./static/tk_icon.png')));
            this.trayIcon.setContextMenu(this.contextMenu);
            this.trayIcon.on('clicked', () => {
                this.mainWindow.focus();
            });
        };
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }
}
const testApp = new Test(electron_1.app);
//# sourceMappingURL=main.js.map