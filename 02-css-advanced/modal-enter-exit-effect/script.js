const openBtn = document.getElementById('openModalBtn')
const closeBtn = document.getElementById('closeModalBtn')
const modalOverlay = document.getElementById('modalOverlay')
const modal = document.getElementById('modalBox')

openBtn.addEventListener('click', function () {
    modalOverlay.style.display = 'flex';

    // Reflow
    modalOverlay.offsetHeight;
    modalOverlay.classList.add('active');
})
modalOverlay.addEventListener('transitionend', () => {
    if (!modalOverlay.classList.contains('active')) {
        modalOverlay.style.display = 'none'
    }
})
closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active')
    }
})