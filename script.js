// Obtener los elementos necesarios
const buttonMenu = document.getElementById("button-menu");
const openIcon = document.getElementById("open-icon"); 
const closeIcon = document.getElementById("close-icon"); 
const navbar = document.getElementById("navbar"); 
const navbarLinks = document.querySelector(".navbar-links");
const lenguages = document.querySelector(".lenguages"); 

// Evento para manejar el scroll y cambiar la apariencia del navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.backgroundColor = "#292929";
    navbar.style.boxShadow = "none";
  }
});

// Evento para abrir o cerrar el menú en dispositivos móviles
buttonMenu.addEventListener("click", function () {
  // Alternar el estado del menú
  navbar.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  lenguages.classList.toggle("active");

  // Cambiar los íconos
  if (navbar.classList.contains("active")) {
    openIcon.style.display = "none"; 
    closeIcon.style.display = "block"; 
  } else {
    openIcon.style.display = "block"; 
    closeIcon.style.display = "none"; 
  }
});

// Detectar clic fuera del menú para cerrarlo
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !buttonMenu.contains(event.target)) {
    if (navbarLinks.classList.contains("active")) {
      navbarLinks.classList.remove("active");
      lenguages.classList.remove("active");
      navbar.classList.remove("active");
      openIcon.style.display = "block"; 
      closeIcon.style.display = "none"; 
    }
  }
});

// Detectar el scroll y cerrar el menú si el usuario hace scroll
window.addEventListener("scroll", function() {
  // Si el menú está abierto y el usuario hace scroll
  if (navbar.classList.contains("active")) {
    navbarLinks.classList.remove("active");
    lenguages.classList.remove("active");
    navbar.classList.remove("active");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});