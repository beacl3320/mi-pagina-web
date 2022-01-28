const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger);

hamburger.addEventListener('click', () => {
    /* alert('click') */
    menu.classList.toggle('openMenu');
})

window.addEventListener('click', e => {
    if(menu.classList.contains('openMenu') && e.target != menu && e.target != hamburger){
        menu.classList.toggle('openMenu');
    }
});