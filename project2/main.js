const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', showMenu)

function showMenu() {

  hamburgerMenu.classList.toggle('active')

}
