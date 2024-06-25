function openMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = "flex";
    menu.style.transition = "all 0.7s ease-in-out";
    menu.style.transform = "translate(0, 0)";
    document.querySelector("body").style.overflow = "hidden";
}

function closeMenu() {
    let menu = document.getElementById("menu");
    menu.style.transition = "all 0.3s ease-in-out";
    menu.style.transform = "translate(100%, 0)";
    document.querySelector("body").style.overflow = "auto";
}

// Project showcase
// Drag
const gallery = document.querySelector("#gallery");
let isDragging = false;
let startX = 0, startScrollLeft = 0;

const dragStart = (e) => {
    isDragging = true;
    gallery.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = gallery.scrollLeft;
}

const dragStop = () => {
    isDragging = false;
    gallery.classList.remove("dragging");
}

const dragging = (e) => {
    if (!isDragging) return;
    gallery.scrollLeft = startScrollLeft - (e.pageX - startX) * 1.5;
}

// prevent menu popup on long press
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

gallery.addEventListener("pointerdown", dragStart);
gallery.addEventListener("pointermove", dragging);
document.addEventListener("pointerup", dragStop);

// Buttons
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const cartWidth = document.querySelector(".cart").offsetWidth;

const previousProject = () => {
    gallery.scrollLeft -= Math.ceil(cartWidth);
}

const nextProject = () => {
    gallery.scrollLeft += Math.ceil(cartWidth);
}

arrowLeft.addEventListener("click", previousProject);
arrowRight.addEventListener("click", nextProject);
// Project showcase end