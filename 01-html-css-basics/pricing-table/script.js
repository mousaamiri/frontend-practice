//================ switch theme
const switchTheme = document.querySelector('.switch-theme');
const switchThemeImg = document.querySelector('.switch-theme img');
switchTheme.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        switchTheme.setAttribute('src', 'assets/images/dark.svg');
        switchThemeImg.setAttribute('src', 'assets/images/night.svg');
        body.setAttribute('data-theme', 'light');
    } else {
        switchTheme.setAttribute('src', 'assets/images/sun.svg');
        switchThemeImg.setAttribute('src', 'assets/images/sun.svg');
        body.setAttribute('data-theme', 'dark');
    }
});

//============== Main Codes