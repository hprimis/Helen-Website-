const menu = document.querySelector("#mobile-menu");
const menu_links = document.querySelector(".navbar__menu");
console.log(menu.classList); 
const mobile_menu = ()=> {
    menu.classList.toggle("is-active"); 
    menu_links.classList.toggle("is-active");
    console.log("button was clicked")
};
menu.addEventListener('click', mobile_menu) 