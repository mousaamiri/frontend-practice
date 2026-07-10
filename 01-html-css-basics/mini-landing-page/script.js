//================ switch theme
const switchTheme = document.querySelector('.switch-theme');


const headphoneIcon = document.getElementById('headphone-icon')
const trustIcon = document.getElementById('trust-icon')
const travelIcon = document.getElementById('travel-icon')

const switchThemeImg = document.querySelector('.switch-theme img');
const siteLogo = document.querySelector('.nav-brand a img')

const darkIcons = [
     {element:travelIcon,path:'assets/images/travel-dark.svg' },
    {element:trustIcon,path:'assets/images/trust-badge-dark.svg' },
    {element:headphoneIcon,path:'assets/images/headphone-dark.svg' },
    
    {element:switchThemeImg,path:'assets/images/night.svg' },
    {element:siteLogo,path:'assets/images/dark-logo.svg' }

]
const whiteIcons = [
    {element:travelIcon,path:'assets/images/travel-white.svg' },
    {element:trustIcon,path:'assets/images/trust-badge-white.svg' },
    {element:headphoneIcon,path:'assets/images/headphone-white.svg' },
    
    {element:switchThemeImg,path:'assets/images/sun.svg' },
    {element:siteLogo,path:'assets/images/white-logo.svg' }

]

switchTheme.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        changeIcons(darkIcons);
        body.setAttribute('data-theme', 'light');
    } else {
        changeIcons(whiteIcons);
        body.setAttribute('data-theme', 'dark');
    }
});

function changeIcons(iconArray){
    if(iconArray){
        iconArray.forEach((item)=>{
            if(item.element){
               item.element.setAttribute('src',item.path)
            
            }else{
                console.warn(`المان یافت نشد. مسیر تصویر: ${item.path}`);
            }
        })
    }
}

//============== Hover menu 

const hamburgerToggleBtn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu')
hamburgerToggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')      
});