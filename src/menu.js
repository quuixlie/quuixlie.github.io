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