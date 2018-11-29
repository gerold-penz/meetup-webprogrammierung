function showMessage() {
    alert("Hallo Oberhofen")
}


function welcomePart1() {
    document.getElementById("anzeige").innerText = "Willkommen ..."
}


function welcomePart2() {
    document.getElementById("anzeige").innerText = "... in Oberhofen."
}


function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}


function showCelsiusToFahrenheit(celsius) {
    console.log(celsiusToFahrenheit(celsius))
}
