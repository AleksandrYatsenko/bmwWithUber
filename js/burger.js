const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const closeMenuElems = document.querySelectorAll('.menu-list__link');
const bodyElem = document.querySelector('.header-main');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerElem.classList.toggle('humburger-menu-active');
};
humburgerElem.addEventListener('click', toggleMenu);

const removeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerElem.classList.remove('humburger-menu-active');
}

closeMenuElems.forEach(closeMenuElem => {
  closeMenuElem.addEventListener('click', toggleMenu)
});

const closeMenu = document.querySelector('.main');
closeMenu.addEventListener('click', removeMenu);


// bodyElem.addEventListener('click', (event) => {
//   const target = event.target;
//   if(target.classList.contains('header-main') || 
//     target.classList.contains('main')) {
//       removeMenu()
//      }

// })