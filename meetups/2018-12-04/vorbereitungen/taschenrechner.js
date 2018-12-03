"use strict"

let calculation = ""
let display = document.getElementById("display")


function showResult() {

    let result = ""

    if (calculation.includes("=")) {
        // "="-Zeichen entfernen und berechnen
        result = calculation + eval(calculation.slice(0, -1))
    } else {
        result = calculation
    }

    // Anzeigen
    display.innerText = result
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
