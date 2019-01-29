
const createNoteButton = document.getElementById("create-note-button")
const newNoteTextElement = document.getElementById("new-note-text")


createNoteButton.addEventListener("click", function() {
    const newNoteText = newNoteTextElement.value
    alert(newNoteText)
})

