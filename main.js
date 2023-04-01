const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener('click', function toggleMenu() {
  const navbar = document.getElementById('navbar');
  const triangle = document.getElementById('triangle');

  if (navbar.style.display === "none") {
    navbar.style.display = "block";
    triangle.style.display = "block";
  } else {
    navbar.style.display = "none";
    triangle.style.display = "none";
  }

});