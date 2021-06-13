require('dotenv/config')
const path = require('path')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    path.join(__dirname, '/../build/index.html')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    titleBarStyle: 'customButtonsOnHover',
    frame: false
  })

  mainWindow.loadURL(startUrl)
}

app.whenReady().then((_) => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
