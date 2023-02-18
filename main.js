const toggler = document.querySelector('[data-toggler]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]')
// toggler.style.display = "none"
toggler.src="assets/images/icon-menu.svg";

let open = true;
toggler.addEventListener('click',function(){
   
    if(open){
        toggler.src="assets/images/icon-menu-close.svg";
        navbar.classList.toggle("mobile_menu_animation");
        overlay.classList.toggle("overlay");
        open = false;
    }
    else {
        toggler.src="assets/images/icon-menu.svg";
        navbar.classList.toggle("mobile_menu_animation");
        overlay.classList.toggle("overlay");
        open = true;
       
    }
})