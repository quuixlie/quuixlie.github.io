function openMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
}

function closeMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = "none";
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
    gallery.scrollLeft = startScrollLeft - (e.pageX - startX);
}

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

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