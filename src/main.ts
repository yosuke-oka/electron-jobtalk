import { app, BrowserWindow, Tray, nativeImage, Menu } from 'electron'
import { resolve } from 'path'

class Test {
    mainWindow: Electron.BrowserWindow = null
    trayIcon: Electron.Tray = null

    contextMenu: Electron.Menu = Menu.buildFromTemplate([
        {label: 'hoge', type: 'radio'}
    ])

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

        this.trayIcon = new Tray(nativeImage.createFromPath(resolve('./static/tk_icon.png')))

        this.trayIcon.setContextMenu(this.contextMenu)
        this.trayIcon.on('clicked', () => {
            this.mainWindow.focus()
        })

    }
}

const testApp = new Test(app)
