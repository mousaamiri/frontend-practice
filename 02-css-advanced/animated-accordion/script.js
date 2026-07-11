const titles = document.querySelectorAll('.accordion-title')
const panels = document.querySelectorAll('.panel')
titles.forEach(btn => {
    btn.addEventListener('click', bnt => {
        if (panels) {
            panels.forEach(panel => {
                panel.classList.remove('active')
            });
        }
        const nextPanel = btn.nextElementSibling;
        nextPanel.classList.add('active')
    })
});