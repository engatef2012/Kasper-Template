let toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", function (e) {
  let nav = e.target.nextElementSibling;
  nav.style.display = nav.style.display == "flex" ? "none" : "flex";
});

