
document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu'); 

menu.onclick = () => {
    console.log("Hiciste clic en el menú");
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};
});
