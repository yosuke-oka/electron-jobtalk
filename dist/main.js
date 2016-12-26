"use strict";
const electron_1 = require("electron");
const path_1 = require("path");
class Test {
    constructor(app) {
        this.app = app;
        this.mainWindow = null;
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
        };
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }
}
const testApp = new Test(electron_1.app);
//# sourceMappingURL=main.js.map