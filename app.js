const menuIcon = document.getElementById("menu")
const menuCloseIcon = document.getElementById("close-menu")
const navLinks = document.getElementById("menu-active")


menu.addEventListener("click", () => {
   menuIcon.style.display = "none"
   menuCloseIcon.style.display = "block"
   navLinks.classList.add("active")
})

menuCloseIcon.addEventListener("click", () => {
   menuIcon.style.display = "block"
   menuCloseIcon.style.display = "none"
   navLinks.classList.remove("active")
})
