import { app, BrowserWindow } from 'electron'
import { menubar } from 'menubar'
import { resolve } from 'path'

class Test {
    mainWindow: Electron.BrowserWindow = null

    constructor(public app: Electron.App){
        this.app.on('window-all-closed', this.onWindowAllClosed)
        this.app.on('ready', this.onReady)
    }

    onWindowAllClosed = () => {
        this.app.quit()
    }

    onReady = () => {
        this.mainWindow = new BrowserWindow({
            width: 1000,
            height: 800,
        })

        this.mainWindow.loadURL('file://' + resolve('./static/index.html'))
        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })

    }
}

const testApp = new Test(app)
