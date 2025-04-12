// Navbar
const Toggle = document.querySelector('.hamburger');
const Navbar = document.querySelector('#primary-menu');

Toggle.addEventListener('click', () => {
    Navbar.classList.toggle('slide');
    Navbar.classList.toggle('open');
    Toggle.classList.toggle('cross');
});


