const electron = require("electron")
let mainWindow = null


function createMainWindow() {
    mainWindow = new electron.BrowserWindow()
    mainWindow.loadFile("index.html")

    mainWindow.on("closed", function() {
        mainWindow = null
    })
}


electron.app.on("ready", createMainWindow)


electron.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron.app.quit()
    }
})


electron.app.on("activate", function() {
    if (mainWindow === null) {
        createMainWindow()
    }
})
