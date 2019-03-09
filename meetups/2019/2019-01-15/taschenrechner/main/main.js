const electron = require("electron")
let mainWindow = null


function createMainWindow() {
    mainWindow = new electron.BrowserWindow({
        width: 430,
        height: 400
    })
    mainWindow.loadFile("renderers/main-window/taschenrechner.html")

    mainWindow.on("closed", function() {
        mainWindow = null
    })
}

electron.app.on("ready", createMainWindow)

