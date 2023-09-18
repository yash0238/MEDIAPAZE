const menuIcon = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click',()=> {
    menuItems.classList.toggle('show-menu');
});
