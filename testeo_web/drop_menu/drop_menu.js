document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menuButton");
  const menuList = document.getElementById("menuList");
  
  menuButton.addEventListener("click", function() {
      menuList.classList.toggle("hidden");
  });
  
  document.addEventListener("click", function(event) {
      if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
          menuList.classList.add("hidden");
      }
  });
});
