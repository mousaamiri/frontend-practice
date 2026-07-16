/*
querySelector : Retrieves the first element that matches a CSS selector
querySelectorAll : Retrieves all elements that match a CSS selector
getElementById : Retrieves an element based on its ID
*/
const logDiv = document.getElementById('logDiv')
const showInputResult = document.getElementById('showResult')
const addStyleBtn = document.getElementById('addStyle')
const removeStyleBtn = document.getElementById('removeStyle')
const card = document.getElementById('card')

const firstLink = document.querySelector('ul li')
const links = document.querySelectorAll('ul li')
const txtInput = document.querySelector('input[type="text"]')
const txtInputResult = document.querySelector('.input-result')
const linkTexts = [...links].map((link) => link.textContent);

logDiv.textContent =
"query selector : " + firstLink.textContent + "\n" +
"query selector all : " + linkTexts.join(",");
logDiv.style.backgroundColor = "#292424"
logDiv.style.padding = "1.2rem 1.5rem"

/* Ussing innerHtml is not safe , becuse of XSS (Cross-Site Scripting) */
links.forEach(link => {
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        logDiv.textContent +="\n"+ e.target.textContent
    })
});
showInputResult.addEventListener('click',(e)=>{
    showInputResult.classList.toggle('active')
    txtInputResult.classList.toggle('active')
})
txtInput.addEventListener(('keyup'),(e)=>{txtInputResult.textContent = e.target.value})

addStyleBtn.addEventListener('click',(e)=>{card.classList.add('card')})
removeStyleBtn.addEventListener('click',(e)=>{card.classList.remove('card')})

const cloneCard = card.cloneNode(true)
cloneCard.style.setProperty("--after-content", '"New cart appended to body"');
const body = document.body
body.appendChild(cloneCard)