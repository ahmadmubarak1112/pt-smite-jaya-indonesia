///// HAMBURGER MENU ANIMATION SLIDE
const hamburgerMenu = document.querySelector(".hamburger-menu input");
const navbarMenu = document.querySelector(".navbar ul");
const overlay = document.querySelector(".overlay");
const bodyOverflow = document.querySelector("body");
const navbarLists = document.querySelectorAll("nav ul li a");
const hambMenuSpans = document.querySelectorAll(".hamburger-menu span");

function hambLogoReactive() {

    hambMenuSpans.forEach(function(hambMenuSpan) {
        hambMenuSpan.classList.remove("active");
    });

}

function hambLogoToggle() {

    hambMenuSpans.forEach(function(hambMenuSpan) {
        hambMenuSpan.classList.toggle("active");
    });

}

hamburgerMenu.addEventListener("change", function() {

    navbarMenu.classList.toggle("show");
    overlay.classList.toggle("active");
    bodyOverflow.classList.toggle("active");

    hambLogoToggle();

});

///// CLOSE NAVBAR IF CLICKED OUTSIDE TO THE NAVBAR
overlay.addEventListener("click", function(e) {

    if( e.target === overlay ) {
        
        hambLogoReactive();

        navbarMenu.classList.remove("show");
        overlay.classList.remove("active");
        bodyOverflow.classList.remove("active");
    }

});

///// NAVBAR LIST CLICK ACTION
navbarLists.forEach(function(navbarList) {

    navbarList.addEventListener("click", function() {

        hambLogoReactive();

        navbarMenu.classList.remove("show");
        overlay.classList.remove("active");
        bodyOverflow.classList.remove("active");

    });

});

///// BACK TO TOP ACTION
const backTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {
    backTopBtn.classList.toggle("show", window.scrollY > 650);
});

///// IMAGE GALLERY ZOOM BUTTON
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const closeBtn = lightbox.querySelector(".lightbox-close");

document.querySelectorAll(".ico-box-zoom").forEach(function(btn) {

    btn.addEventListener("click", function(e) {

        e.stopPropagation();

        const item = btn.closest(".gallery-wrapper-item");
        const img = item.querySelector("img");

        lightboxImg.src = img.src;

        lightboxCaption.textContent = img.dataset.caption;

        lightbox.classList.add("show");

        bodyOverflow.classList.add("active");

    });

});

///// IMAGE GALLERY CLOSE BUTTON
closeBtn.addEventListener("click", function() {

    lightbox.classList.remove("show");
    bodyOverflow.classList.remove("active");

});

///// IMAGE GALLERY CLOSE OVERLAY
lightbox.addEventListener("click", function(e) {

    if( e.target === lightbox ) {

        lightbox.classList.remove("show");
        bodyOverflow.classList.remove("active");
        
    }

});
