const topNavbar = document.getElementById("top-navbar")
const menuIcon = document.getElementById("menu")
const menuCloseIcon = document.getElementById("close-menu")
const navLinks = document.getElementById("menu-active")

// hide menu icon and add fixed position to menu
menu.addEventListener("click", () => {
   menuIcon.style.display = "none"
   menuCloseIcon.style.display = "block"
   navLinks.classList.add("active")
   topNavbar.style.position = "fixed"
})

// hide close menu icon
menuCloseIcon.addEventListener("click", () => {
   menuIcon.style.display = "block"
   menuCloseIcon.style.display = "none"
   navLinks.classList.remove("active")
   topNavbar.style.position = "sticky"
})

// verify screen size
window.addEventListener("resize", () => {
   if (window.innerWidth > 690) {
      navLinks.classList.remove("active")
      menuIcon.style.display = "none"
      menuCloseIcon.style.display = "none"
      topNavbar.style.position = "sticky"
   }
})

// show menu icon when screen is small
window.addEventListener("resize", () => {
   if (window.innerWidth < 690 && menuCloseIcon.style.display === "none") {
      menuIcon.style.display = "block";
   }
})
