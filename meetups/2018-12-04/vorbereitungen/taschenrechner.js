"use strict"

let calculation = ""
let display = document.getElementById("display")

 
function showResult() {

    let result = ""

    if (calculation.includes("=")) {
        // "="-Zeichen entfernen und berechnen
        result = calculation + eval(calculation.slice(0, -1))

        // Leerzeichen um das "="-Zeichen
        result = result.replace("=", " = ")
    } else {
        result = calculation
    }

    // Anzeigen
    display.innerHTML = result
}


function addChar(char) {

    // Verhindern, dass noch ein "=" hinzugefügt wird
    if (calculation.includes("=")) {
        return
    }

    // Zeichen hinzufügen
    calculation = calculation + char

    // Ergebnis anzeigen
    showResult()
}


function deleteAll() {
    calculation = ""
    showResult()
}


function deleteLast() {
    // Verhindern, dass gelöscht wird
    if (calculation.includes("=")) {
        return
    }
    calculation = calculation.slice(0, -1)
    showResult()
}