/* ==========================================
    ELEMENT REFERENCES
========================================== */
const menuBtn  = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar   = document.querySelector(".navbar");

/* ==========================================
    OPEN / CLOSE MOBILE MENU
========================================== */
function openMenu() {
    menuBtn.classList.add("active");
    navLinks.classList.add("active");
    navbar.classList.add("menu-open");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    navbar.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
}

/* Toggle on hamburger click */
menuBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

/* ==========================================
    CLOSE ON NAV LINK CLICK
========================================== */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

/* ==========================================
    CLOSE ON CLICK OUTSIDE NAVBAR
========================================== */
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains("active")) {
        closeMenu();
    }
});

/* ==========================================
    CLOSE ON ESCAPE KEY
========================================== */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
        closeMenu();
        menuBtn.focus();
    }
});

/* ==========================================
    SCROLL — add .scrolled class to navbar
    (menu stays open while scrolling)
========================================== */
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
            ticking = false;
        });
        ticking = true;
    }
});
