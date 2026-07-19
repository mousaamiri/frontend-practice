const container = document.getElementById('notesContainer')
const noteInput = document.getElementById('addNoteInput')
const addNoteBtn = document.getElementById('addNoteBtn')

let state = { todos: [] }
setState(state)
function addTodo(text) {
    if(text.trim()==="")return;
    setState({ todos: [...state.todos, { id: Date.now(), text, done: false }] })
}
function toggleTodo(id) {
    setState({
        todos: state.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    })
}
function deleteTodo(id) {
    setState({ todos: state.todos.filter(t => t.id !== id) })
}
function setState(newState) {
    state = { ...state, ...newState }
    render()
}
function render() {
    container.innerHTML = ""
    state.todos.forEach(todo => {
        container.appendChild(renderNoteItem(todo))
    })
}
function renderNoteItem(todo) {
     const noteContainer = document.createElement('div')
        noteContainer.className = 'note-container'
        const inputContainer = document.createElement('label')
        inputContainer.className = 'input-container'

        const noteStateCheckBox = document.createElement('input')
        noteStateCheckBox.setAttribute('type', 'checkbox')
        noteStateCheckBox.className = 'note-state'
        noteStateCheckBox.checked = todo.done
        noteStateCheckBox.addEventListener('change', () => {
            toggleTodo(todo.id)
        });

        const checkmark = document.createElement('span')
        checkmark.className = 'checkmark'

        const noteTitle = document.createElement('h6')
        noteTitle.className = 'note-title'
        noteTitle.textContent = todo.text

        inputContainer.appendChild(noteStateCheckBox)
        inputContainer.appendChild(checkmark)
        inputContainer.appendChild(noteTitle)

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-note'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => {
            deleteTodo(todo.id)
        })

        noteContainer.appendChild(inputContainer)
        noteContainer.appendChild(deleteBtn)

    return noteContainer
}
addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo(noteInput.value)
    noteInput.value = ""
})
noteInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        addTodo(noteInput.value)
        noteInput.value = ""
    }
})
