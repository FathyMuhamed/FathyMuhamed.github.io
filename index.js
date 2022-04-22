const btnMenu = document.querySelector('.menu');
const navShow = document.getElementById('nav');
const toggleThem = document.getElementById('mode');
const icons = document.querySelectorAll('.icon');
const proIcon = document.querySelector("#projects ");
proIcon.classList.remove('projectIcon')






let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode()

function enableDarkMode() {
    toggleThem.setAttribute('src', 'image/meLight.svg');
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
    icons.forEach(icon => icon.classList.add('filter'))
    proIcon.classList.add('projectIcon')


}
function disableDarkMode() {
    toggleThem.setAttribute('src', 'image/meDark.svg')
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark');
    icons.forEach(icon => icon.classList.remove('filter'))
    proIcon.classList.remove('projectIcon')


}
toggleThem.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    theme === 'dark' ? disableDarkMode() : enableDarkMode()
})
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));

const projects = [
    {
        url: 'https://github.com/FathyMuhamed/pizza-shop',
        header: 'Pizza Hot',
        img: 'image/pizza_Hot.png',
        live: 'https://pizzahot.vercel.app/'
    },
    {
        url: 'https://github.com/FathyMuhamed/Cafe-House',
        header: 'Cafe House',
        img: 'image/cafeHouse.png',
        live: 'https://cafe-house.vercel.app'
    },
    {
        url: 'https://github.com/FathyMuhamed/Weather-App',
        header: 'Weather App',
        img: 'image/weatherApp0.svg',
        live: 'https://know-weather-now.netlify.app'
    },
    {
        url: 'https://github.com/FathyMuhamed/Food-Recipes',
        header: 'Food Recipes',
        img: 'image/foodRecipes0.jpg',
        live: 'https://recipes-in-one-place.netlify.app'

    },
    {
        url: 'https://github.com/FathyMuhamed/Color-Picker',
        header: 'Color Picker',
        img: 'image/colorPicker0.jpg',
        live: 'https://color-paletters.netlify.app'
    },

];


btnMenu.addEventListener('click', () => {

    btnMenu.classList.toggle('active');
    navShow.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const project = document.getElementById('projects');
    const projectItem = document.createElement('div');
    projectItem.className = 'projectItems';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'projectCard';
        projectCard.setAttribute("aria-label", `${project.header}`);
        projectCard.innerHTML = `

         <img  tabindex="0" class="cardImg" src=${project.img} alt=${project.header}>
         <a
         href="${project.url}"
         title="GitHub"
         rel="noreferrer"
         target="_blank"
         >
         <img   src="image/github-outline.svg" alt="github">
       </a>
         <a
         href="${project.live}"
         title="Live Project"
         rel="noreferrer"
         target="_blank"
         >
         <img  src="image/monitor-outline.svg" alt="live">
       </a>
       `;
        projectItem.append(projectCard)
    });
    project.append(projectItem);
})


