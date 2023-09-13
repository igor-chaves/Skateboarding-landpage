const menuIcon = document.getElementById("menu")
const menuCloseIcon = document.getElementById("close-menu")
const navLinks = document.getElementById("menu-active")

// hide menu icon
menu.addEventListener("click", () => {
   menuIcon.style.display = "none"
   menuCloseIcon.style.display = "block"
   navLinks.classList.add("active")
})

// hide close menu icon
menuCloseIcon.addEventListener("click", () => {
   menuIcon.style.display = "block"
   menuCloseIcon.style.display = "none"
   navLinks.classList.remove("active")
})

// verify screen size
window.addEventListener("resize", () => {
   if (window.innerWidth > 690) {
      navLinks.classList.remove("active")
      menuIcon.style.display = "none"
      menuCloseIcon.style.display = "none"
   }
})

// show menu icon when screen is small
window.addEventListener("resize", () => {
   if (window.innerWidth < 690 && menuCloseIcon.style.display === "none") {
      menuIcon.style.display = "block";
   }
})
