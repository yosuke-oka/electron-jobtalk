"use strict";
var electron_1 = require("electron");
var Test = (function () {
    function Test(app) {
        var _this = this;
        this.app = app;
        this.mainWindow = null;
        this.onWindowAllClosed = function () {
            _this.app.quit();
        };
        this.onReady = function () {
            _this.mainWindow = new electron_1.BrowserWindow({
                width: 800,
                height: 600,
            });
            _this.mainWindow.loadURL('https://jobtalk.jp');
            _this.mainWindow.on('closed', function () {
                _this.mainWindow = null;
            });
        };
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }
    return Test;
}());
var testApp = new Test(electron_1.app);
