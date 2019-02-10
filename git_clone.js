// Erstellt im Ordner dieser Datei einen Klon des Git-Repositories unseres Meetups.

const child_process = require("child_process");


(function () {
    "use strict"

    child_process.exec("git pull", (error, stdout, stderr) => {
        console.log(stdout)
    })

})()
