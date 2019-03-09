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
    calculation = calculation + char
    showResult()
}
