function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");

  const navMenu = document.getElementById("navbar");

  navMenu.style.display = "fixed";

  menuIcon.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}

const hamburger = document.querySelector("button");

hamburger.addEventListener("pointerdown", toggleMenu, false);