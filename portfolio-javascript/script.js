/* ==========================================
    MOBILE NAVBAR TOGGLE
========================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
const navLinksItems = document.querySelectorAll('.nav-links li a');

function openMenu() {
    menuToggle.classList.add('active');
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    document.body.classList.add('menu-open');
}

function closeMenu() {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

navOverlay.addEventListener('click', closeMenu);

navLinksItems.forEach(function (link) {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        closeMenu();
    }
});
