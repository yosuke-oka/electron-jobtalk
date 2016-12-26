import { app, BrowserWindow } from 'electron'
import { menubar } from 'menubar'

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
            width: 800,
            height: 600,
        })

        this.mainWindow.loadURL('https://jobtalk.jp')
        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })

    }
}


const testApp = new Test(app)
