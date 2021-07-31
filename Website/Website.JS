const menu = document.querySelector("#mobile-menu");
const menu_links = document.querySelector(".navbar__menu");
const nav_logo = document.querySelector("#navbar__logo")
console.log(menu.classList); 
const mobile_menu = ()=> {
    menu.classList.toggle("is-active"); 
    menu_links.classList.toggle("active");
    console.log("button was clicked")
};
menu.addEventListener('click', mobile_menu) 
//Highlighting navigation bar 
const highlight_menu = ()=> {
    const elem = document.querySelector(".highlight");
    const home_menu = document.querySelector("#home-page");
    const games_menu = document.querySelector("#games-page");
    const about_menu = document.querySelector("#about-page");
    let scrollpos = window.scrollY; 

    if (window.innerWidth > 960 && scrollpos <600) { 
        home_menu.classList.add("highlight");
        games_menu.classList.remove("highlight");
        return; 
    }
    else if (window.innerWidth > 960 && scrollpos <1400) { 
        games_menu.classList.add("highlight");
        about_menu.classList.remove("highlight");
        home_menu.classList.remove("highlight");
        return; 
    }
    else if (window.innerWidth > 960 && scrollpos < 2345) { 
        about_menu.classList.add("highlight");
        games_menu.classList.remove("highlight");
        return; 
    }
    if ((elem && window.innerWidth < 960 && scrollpos < 900) || elem) {
        elem.classList.remove("highlight")
    }
}
window.addEventListener('scroll', highlight_menu);
window.addEventListener('click', highlight_menu);

const hide_mobile_menu = ()=> {
    const menu_bars = document.querySelector(".is-active")
    if (window.innerWidth <= 768 && menu_bars) {
        menu.classList.toggle("is-active");
        menu_links.classList.toggle("active");
        menu.classList.toggle("is-active"); 
        menu_links.classList.toggle("active");
        console.log("button was clicked");
    }
}
menu.addEventListener('click', hide_mobile_menu);
menu_links.addEventListener('click', hide_mobile_menu);
nav_logo.addEventListener('click', hide_mobile_menu);

