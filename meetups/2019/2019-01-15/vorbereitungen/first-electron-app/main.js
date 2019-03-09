// Haupt-Prozess-Modul der Anwendung
const electron = require("electron")
let win = null


function createWindow() {
    win = new electron.BrowserWindow({
        
    })
    win.setMenuBarVisibility(false)
    win.loadFile("index.html")

    win.on("closed", function() {
        win = null
    })
}


electron.app.on("ready", createWindow)


electron.app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        electron.app.quit()
    }
})


electron.app.on("activate", function() {
    if (win === null) {
        createWindow()
    }
})


