const app = document.getElementById('app')
let count = 0

render()
function render() {
    app.innerHTML = ""
    const container = document.createElement('div')
    container.className = 'container'

    const decrementBtn = document.createElement('button')
    decrementBtn.className = 'decrement-btn'
    decrementBtn.textContent = '-'
    if (count === 0) {
        decrementBtn.disabled = true
    }
    decrementBtn.addEventListener('click', () => { decrement() })

    const countSpan = document.createElement('span')
    countSpan.className = 'count'
    countSpan.textContent = count

    const incrementBtn = document.createElement('button')
    incrementBtn.className = 'increment-btn'
    incrementBtn.textContent = '+'
    incrementBtn.addEventListener('click', () => { increment() })
    if (count === 10) {
        incrementBtn.disabled = true
    }
    container.appendChild(decrementBtn)
    container.appendChild(countSpan)
    container.appendChild(incrementBtn)

    const resetBtn = document.createElement('button')
    resetBtn.className = 'reset-btn'
    resetBtn.textContent = '⟳'
    if (count === 0) {
        resetBtn.disabled = true
    }
    resetBtn.addEventListener('click', () => { reset() })

    app.append(container)
    app.append(resetBtn)

}

function increment() {
    count++
    render()
}
function decrement() {
    count--
    render()
}
function reset() {
    count = 0
    render()
}