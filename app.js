// VARIABLES
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelectorAll(".navbar-item");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");

// TOGGLE MENU FUNCTION
const toggleMenu = () => {
  if (navbar.classList.contains("showMenu")) {
    navbar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  } else {
    navbar.classList.add("showMenu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  }
};

// ADDING EVENT LISTENER TO HAMBURGER MENU
hamburgerMenu.addEventListener("click", toggleMenu);

// HIDE THE MENU WHEN USER CLICK ON THE LINK
navbarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", toggleMenu);
});
