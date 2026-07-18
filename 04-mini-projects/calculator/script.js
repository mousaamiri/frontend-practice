const buttons = document.querySelector('.buttons')
const screen = document.getElementById('display')
const mode = {
    typingFirst: "typingFirst",
    operatorSelected: "operatorSelected",
    typingSecond: "typingSecond",
    result: "result",
    error: "error",
}
let state = {
    display: "0",
    accumulator: null,
    operator: null,
    mode: mode.typingFirst,
    errorMessage: null
}

/* error | display */
buttons.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return
    const value = e.target.dataset.value
    const action = e.target.dataset.action
    if (value) {
        if (state.display.length < 8) {
            if ((value === "." && state.display.includes("."))
                || (value === "0" && state.display === "0"))
                return;
            if (state.mode === mode.result) {
                reset()
            }
            let newMode = state.mode
            let newDisplay = String(state.display)
            if (state.mode === mode.operatorSelected) {
                newMode = mode.typingSecond
                newDisplay = ""
            }else{
                newMode = mode.typingFirst
            }
            newDisplay = (value !== "0" && newDisplay === "0") ? value : newDisplay + value
            setState({ display: newDisplay, mode: newMode })

        }
    } else if (action) {
        switch (action) {
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                {
                    if (state.accumulator === null) {
                        setState({
                            accumulator: state.display,
                            mode: mode.operatorSelected,
                            operator: action
                        })
                    }
                    else if (state.mode === mode.typingSecond || state.mode === mode.operatorSelected) {
                        if (checkZeroDivide()) break;
                        const result = calculate(parseFloat(state.accumulator), parseFloat(state.display), state.operator)
                        setState({
                            accumulator: result, display: result, mode: mode.operatorSelected,
                            operator: action
                        })
                    } else {
                        break;
                    }
                }
                break;
            case 'equals':
                {
                    if (state.mode === mode.operatorSelected) {
                        if (checkZeroDivide()) break;
                        const result = calculate(parseFloat(state.accumulator), parseFloat(state.accumulator), state.operator)
                        setState({ accumulator: result, display: result, mode: mode.result })
                    } else if (state.mode === mode.typingSecond) {
                        if (checkZeroDivide()) break;
                        const current = state.display
                        const result = calculate(parseFloat(state.accumulator), parseFloat(state.display), state.operator)
                        setState({ accumulator: current, display: result, mode: mode.result })
                    } else if (state.mode === mode.result) {
                        const result = calculate(parseFloat(state.display), parseFloat(state.accumulator), state.operator)
                        setState({ display: result, mode: mode.result })
                    }
                }
                break;
            case 'clear':
                {
                    reset()
                }
                break;
            case 'backspace':
                const newDisplay = state.display.slice(0, state.display.length - 1)
                setState({ display: (newDisplay === "") ? "0" : newDisplay })
                break;
            default:
                setState({ errorMessage: "Unknown status" })
                break;

        }
    }
})
function reset() {
    setState({
        accumulator: null,
        display: "0",
        mode: mode.typingFirst,
        operator: null,
        errorMessage: null
    })
}
function checkZeroDivide() {
    if (state.operator === "divide" && parseFloat(state.display) === 0) {

        setState({
            errorMessage: "Cannot divide by zero",
            mode: mode.error
        })
        return true
    }
    return false;
}
function calculate(first, second, operator) {
    switch (operator) {
        case 'add':
            return first + second

        case 'subtract':
            return first - second

        case 'multiply':
            return first * second

        case 'divide':
            return first / second
    }
}

function setState(newState) {
    state = { ...state, ...newState }
    render()
}
function render() {

    if (!state.errorMessage) {
        screen.textContent = state.display
        screen.className = "display"
        screen.style.setProperty("--after-content", `"${(state.accumulator === null) ? "" : state.accumulator}"`);
    } else {
        screen.textContent = state.errorMessage
        screen.className = "error"
    }
}