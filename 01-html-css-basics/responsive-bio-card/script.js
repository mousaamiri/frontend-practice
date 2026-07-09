const cardContent = document.querySelector('.card-content');
const card = document.querySelector('.card');
// show card content on hover
card.addEventListener('mouseenter', () => {
    cardContent.style.opacity = '1';
    cardContent.style.visibility = 'visible';
    cardContent.style.transform = 'translateY(0)';
});
card.addEventListener('mouseleave', () => {
    cardContent.style.opacity = '0';
    cardContent.style.visibility = 'hidden';
    cardContent.style.transform = 'translateY(20px)';
});
// switch theme
const switchTheme = document.querySelector('.switch-theme');
const followersIcon = document.querySelector('.followers-icon');
switchTheme.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        switchTheme.setAttribute('src', 'assets/images/dark.svg');
        followersIcon.setAttribute('src', 'assets/images/avatar-light.svg');
        body.setAttribute('data-theme', 'light');
    } else {
        switchTheme.setAttribute('src', 'assets/images/sun.svg');
        followersIcon.setAttribute('src', 'assets/images/avatar-dark.svg');
        body.setAttribute('data-theme', 'dark');
    }
});