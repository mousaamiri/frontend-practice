const container = document.getElementById('notesContainer')
const noteInput = document.getElementById('addNoteInput')
const addNoteBtn = document.getElementById('addNoteBtn')

let notes = []

function addNote(title) {
    if (title.trim() !== "" && !notes.find(note=>note.title===title)) {
        notes.push({ id: Date.now(), title, done: false })
        render()
    }
}
function deleteNote(id) {
    notes = notes.filter(n => n.id !== id)
    render()
}
function render() {
    container.innerHTML = ""
    notes.forEach(note => {
        const noteContainer = document.createElement('div')
        noteContainer.className = 'note-container'
        const inputContainer = document.createElement('label')
        inputContainer.className = 'input-container'

        const noteStateCheckBox = document.createElement('input')
        noteStateCheckBox.setAttribute('type', 'checkbox')
        noteStateCheckBox.className = 'note-state'
        noteStateCheckBox.checked = note.done
        noteStateCheckBox.addEventListener('change', () => {
            note.done = noteStateCheckBox.checked;
        });

        const checkmark = document.createElement('span')
        checkmark.className = 'checkmark'

        const noteTitle = document.createElement('h6')
        noteTitle.className = 'note-title'
        noteTitle.textContent = note.title

        inputContainer.appendChild(noteStateCheckBox)
        inputContainer.appendChild(checkmark)
        inputContainer.appendChild(noteTitle)

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-note'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => {
            deleteNote(note.id)
        })

        noteContainer.appendChild(inputContainer)
        noteContainer.appendChild(deleteBtn)

        container.appendChild(noteContainer)
    })
}
addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addNote(noteInput.value)
    noteInput.value = ""
})
noteInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        addNote(noteInput.value)
        noteInput.value = ""
    }
})
