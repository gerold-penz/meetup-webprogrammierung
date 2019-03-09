"use strict"

const { app, BrowserWindow } = require("electron")
const path = require("path")

let mainWindow = null


function createMainWindow() {

    mainWindow = new BrowserWindow({
        width: 400,
        height: 200
    })
    // mainWindow.setMenuBarVisibility(false)
    mainWindow.loadFile(path.join("renderers", "main-window", "index.html"))


    mainWindow.on("closed", () => {
        mainWindow = null
    })


    mainWindow.on("ping", (message) => {
        console.log(message)
        mainWindow.emit("pong", message)
    })

}


app.on("ready", () => {
    createMainWindow()
})


app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit()
    }
})


app.on("activate", () => {
    if (mainWindow === null) {
        createMainWindow()
    }
})



