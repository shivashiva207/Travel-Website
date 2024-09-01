/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===============  MENU MENU ===============*/
if (navToggle) {
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
    
}
/*===============  MENU HIDDEN ===============*/
if (navClose) {
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
    
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the  show__menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',LinkAction))


/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById( 'header')
    this.scroll >= 50? header.classList.add('blur-header')
                     :header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
