//================ switch theme
const switchTheme = document.querySelector('.switch-theme');
const switchThemeImg = document.querySelector('.switch-theme img');
const siteLogo = document.querySelector('.nav-brand a img')
switchTheme.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        switchTheme.setAttribute('src', 'assets/images/dark.svg');
        switchThemeImg.setAttribute('src', 'assets/images/night.svg');
        siteLogo.setAttribute('src','assets/images/github.svg')
        body.setAttribute('data-theme', 'light');
    } else {
        switchTheme.setAttribute('src', 'assets/images/sun.svg');
        switchThemeImg.setAttribute('src', 'assets/images/sun.svg');
        siteLogo.setAttribute('src','assets/images/github-white.svg')
        body.setAttribute('data-theme', 'dark');
    }
});

//============== Hover menu 

const hamburgerToggleBtn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu')
hamburgerToggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')      
});