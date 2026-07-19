const questionText = document.getElementById('question-text')
const optionsContainer = document.getElementById('options-container')
const resultScreen = document.getElementById('result-screen')
const quizScreen = document.getElementById('quiz-screen')
const nextBtn = document.getElementById('next-btn')
const restartBtn = document.getElementById('restart-btn')
const score = document.getElementById('score')
const questionCount = document.getElementById('question-count')
const resultScore = document.getElementById('result-score')
const resultQuestionCount = document.getElementById('result-question-count')
const questionNumber = document.getElementById('question-number')
const questions = [
    {
        question: "کدام متد برای اضافه کردن یک عنصر به انتهای آرایه استفاده می‌شود؟",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctIndex: 0
    },
    {
        question: "کدام مقدار در جاوااسکریپت نوع Boolean دارد؟",
        options: ["0", '"true"', "true", "null"],
        correctIndex: 2
    },
    {
        question: "برای انتخاب یک عنصر با id از DOM از کدام متد استفاده می‌شود؟",
        options: [
            "querySelectorAll()",
            "getElementById()",
            "getElementsByClassName()",
            "createElement()"
        ],
        correctIndex: 1
    },
    {
        question: "خروجی عبارت typeof [] چیست؟",
        options: ["array", "object", "list", "undefined"],
        correctIndex: 1
    },
    {
        question: "کدام حلقه حداقل یک بار اجرا می‌شود؟",
        options: ["for", "while", "do...while", "for...of"],
        correctIndex: 2
    },
    {
        question: "کدام متد آخرین عنصر آرایه را حذف می‌کند؟",
        options: ["shift()", "push()", "pop()", "splice()"],
        correctIndex: 2
    },
    {
        question: "کدام عملگر برای مقایسه مقدار و نوع به صورت همزمان استفاده می‌شود؟",
        options: ["==", "!=", "===", "="],
        correctIndex: 2
    },
    {
        question: "کدام متد برای تبدیل رشته JSON به شیء جاوااسکریپت استفاده می‌شود؟",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctIndex: 1
    },
    {
        question: "کدام کلمه کلیدی برای تعریف یک مقدار غیرقابل تغییر استفاده می‌شود؟",
        options: ["let", "var", "const", "static"],
        correctIndex: 2
    },
    {
        question: "برای توقف اجرای یک حلقه از کدام دستور استفاده می‌شود؟",
        options: ["continue", "stop", "break", "return"],
        correctIndex: 2
    }
];
let state = {
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswerIndex: null, 
    isAnswered: false,         
    isFinished: false          
}
restart()
function selectAnswer(index) {
    if (state.isAnswered) return  
    const isCorrect = index === questions[state.currentQuestionIndex].correctIndex
    setState({
        selectedAnswerIndex: index,
        isAnswered: true,
        score: isCorrect ? state.score + 1 : state.score
    })
}

function nextQuestion() {
    const isLastQuestion = state.currentQuestionIndex === questions.length - 1
    if (isLastQuestion) {
        setState({ isFinished: true })
    } else {
        setState({
            currentQuestionIndex: state.currentQuestionIndex + 1,
            selectedAnswerIndex: null,
            isAnswered: false
        })
    }
}

function restart() {
    setState({
        currentQuestionIndex: 0,
        score: 0,
        selectedAnswerIndex: null,
        isAnswered: false,
        isFinished: false
    })
}
function setState(newState) {
    state = { ...state, ...newState }
    render()
}
function render() {
    if (state.isFinished) {
        renderResult()
        return
    }
    const q = questions[state.currentQuestionIndex]
    questionText.textContent = q.question
    score.textContent = state.score
    questionCount.textContent = questions.length
    questionNumber.textContent = state.currentQuestionIndex + 1

    quizScreen.hidden = false
    resultScreen.hidden = true
    optionsContainer.innerHTML = ""
    nextBtn.style.display = 'none'

    q.options.forEach((option, index) => {
        const btn = document.createElement('button')
        btn.className = 'option'
        btn.textContent = option
        btn.addEventListener('click', () => selectAnswer(index))
        if (state.isAnswered) {
            if (index === q.correctIndex) btn.classList.add('correct')
            else if (index === state.selectedAnswerIndex) btn.classList.add('incorrect')
            nextBtn.style.display = 'block'
        }
        optionsContainer.appendChild(btn)
    })
}
nextBtn.addEventListener('click', () => { nextQuestion() })
restartBtn.addEventListener('click', () => { restart() })
function renderResult() {
    quizScreen.hidden = true
    resultScreen.hidden = false
    resultScore.textContent = state.score
    resultQuestionCount.textContent = questions.length
}