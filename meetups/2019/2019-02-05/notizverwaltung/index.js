(function () {
    "use strict"

    const notes = []  // Liste mit Notizen

    const createNoteButton = document.getElementById("create-note-button")
    const newNoteTextElement = document.getElementById("new-note-text")
    const displayArea = document.getElementById("display-area")


    // Erstellt den HTML-Code für eine Notiz
    function getNoteHtml(note) {
        const htmlText = `
        <!-- Notiz BEGIN -->
        <div class="note-container">
            <div class="note-body">
                ${note.content}
            </div>
        </div>
        <!-- Notiz END -->`
        return htmlText
    }


    // Erstellt den HTML-Code für alle Notizen
    function getNotesHtml(notes) {
        let htmlText = ""
        for (let note of notes) {
            htmlText = htmlText + getNoteHtml(note)
        }
        return htmlText
    }


    // Wird beim Klick auf den "Erstellen"-Button ausgeführt
    createNoteButton.addEventListener("click", function () {
        
        // Notiztext auslesen
        const newNoteText = newNoteTextElement.value.trim()

        // Prüfen ob etwas eingegeben wurde
        if (newNoteText == "") {
            return
        }

        // Notiz erstellen
        const note = {
            "content": newNoteText
        }

        // Notiz der Liste hinzufügen
        notes.push(note)

        // HTML-Code mit den Notizen erstellen und anzeigen
        let htmlText = getNotesHtml(notes)
        displayArea.innerHTML = htmlText

        // New-Note-Text-Element zurück setzen
        newNoteTextElement.value = ""
    })

})()
