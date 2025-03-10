
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const nav = document.getElementById("nav");
  const menu = document.getElementById("menu-header");

  menuButton.addEventListener("click", function () {
      // Alternar la clase active en el nav
      if (menu.style.display === "block") {
          menu.style.display = "none";
      } else {
          menu.style.display = "block";
      }
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && menu.style.display === "block") {
          menu.style.display = "none";
      }
  });
});

