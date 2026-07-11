const switchToggle = document.querySelector('.switch');
const checkbox = document.querySelector('input');

switchToggle.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
});