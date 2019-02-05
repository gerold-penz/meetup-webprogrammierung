(function () {
    "use strict"

    const notes = []  // Liste mit Notizen

    const createNoteButton = document.getElementById("create-note-button")
    const newNoteTextElement = document.getElementById("new-note-text")
    const displayArea = document.getElementById("display-area")


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


    function getNotesHtml(notes) {
        let htmlText = ""
        for (let note of notes) {
            htmlText = htmlText + getNoteHtml(note)
        }
        return htmlText
    }


    createNoteButton.addEventListener("click", function () {

        const newNoteText = newNoteTextElement.value
        const note = {
            "content": newNoteText
        }
        notes.push(note)

        let htmlText = getNotesHtml(notes)
        
        displayArea.innerHTML = htmlText

    })

})()
