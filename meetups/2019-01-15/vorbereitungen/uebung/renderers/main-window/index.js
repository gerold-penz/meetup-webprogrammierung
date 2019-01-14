"use strict"

const { dialog, getCurrentWindow, log } = require("electron").remote
const currentWindow = getCurrentWindow()


currentWindow.on("pong", (message) => {
    console.log(message)
})


const btn = document.getElementById("testbutton").addEventListener("click", async () => {

    let result = await dialog.showMessageBox(currentWindow, {
        type: "info",
        title: "Servus",
        buttons: ["Abbrechen", "OK"],
        message: "Ich bin eine Messagebox.\nDas ist die\nperfekte Welle."
    })

    currentWindow.emit("ping", "Hallo Welt")

})
