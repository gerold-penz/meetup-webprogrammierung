"use strict"

const BACKGROUND_IMAGE_VALUE = "background_image_value"
const backgroundImageChanger = document.getElementById("backgroundImageChanger")

let calculation = ""
let display = document.getElementById("display")


function showResult() {

    let result = calculation

    if (calculation.includes("=")) {
        result = calculation + eval(calculation.slice(0, -1))
    } 

    display.innerText = result
}


function addChar(char) {
    if (calculation === "0") {
        calculation = char
    } else {
        calculation = calculation + char
    }
    showResult()
}


function deleteLastChar() {
    if (calculation.includes("=")) {
        return
    }
    if (calculation === "0") {
        return
    }
    calculation = calculation.slice(0, -1)
    if (calculation === "") {
        calculation = "0"
    }
    showResult()
}


function deleteAll() {
    calculation = "0"
    showResult()
}


function changeBackgroundImage() {

    const calculator = document.getElementById("calculator")
    const backgroundValue = backgroundImageChanger.value
    calculator.style.backgroundImage = backgroundValue

    localStorage.setItem(BACKGROUND_IMAGE_VALUE, backgroundValue)
}


function loadBackgroundImage() {
    const backgroundValue = localStorage.getItem(BACKGROUND_IMAGE_VALUE)
    if (!backgroundValue) {
        return
    }

    calculator.style.backgroundImage = backgroundValue
    backgroundImageChanger.value = backgroundValue
}
loadBackgroundImage()

