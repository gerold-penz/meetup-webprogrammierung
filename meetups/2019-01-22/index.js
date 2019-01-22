"use strict"

let personen = [
    {vn: "Gerold", "nn": "Penz"},
    {"vn": "Max", nn: "Mustermann"}
]

// for (let person of personen) {
//     if (person.nn[0] == "M") {
//         document.write(person.nn + "<br/>")
//     }
// }


for (let person of personen) {
    if (person.nn.indexOf("mann") > -1) {
        document.write(person.nn + "<br/>")
    }
}
