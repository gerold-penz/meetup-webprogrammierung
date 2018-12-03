"use strict"

let calculation = ""
let display = document.getElementById("display")

 
function showResult() {

    let result = ""

    if (calculation.includes("=")) {
        // "="-Zeichen entfernen und berechnen
        result = calculation + eval(calculation.slice(0, -1))
        result = result.replace("=", " = ")
    } else {
        result = calculation
    }

    // Anzeigen
    display.innerHTML = result
}


function addChars(chars) {

    // Verhindern, dass noch ein "=" hinzugefügt wird
    if (calculation.includes("=")) {
        return
    }

    // Zeichen hinzufügen
    calculation = calculation + chars

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