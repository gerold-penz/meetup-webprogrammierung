// Haupt-Modul der Anwendung

const electron = require("electron")
let mainWindow = null


function createMainWindow() {
    mainWindow = new electron.BrowserWindow({
        width: 400,
        height: 327,
        resizable: false,
        center: true
    })

    mainWindow.loadFile("./windows/main-window/taschenrechner.html")
    mainWindow.setMenuBarVisibility(false)

    mainWindow.on("closed", function() {
        mainWindow = null
    })

    return mainWindow
}


electron.app.on("ready", function() {
    console.log("ready")
    createMainWindow()
})


electron.app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        electron.app.quit()
    }
})


electron.app.on("activate", function() {
    if (win === null) {
        createMainWindow()
    }
})

