const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('main', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data)
  },
  receive: (channel, callback) => {
    ipcRenderer.on(channel, (...args) => callback(...args))
  }
})
