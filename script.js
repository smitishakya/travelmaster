const hamburger = document.getElementById('hamburger');
const navul = document.getElementById('nav-ul');
const navbutton = document.getElementById('nav-button');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
    navbutton.classList.toggle('showbutton');
});