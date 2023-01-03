const hamburger = document.querySelector(".hamburguer")
const navmenu = document.querySelector(".nav-menu")

hamburguer.addeventlistener("click", () => {
    hamburguer.classlist.toggle("active")
    navmenu.classlist.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classlist.remove("active")
    navmenu.classlist.remove("active")
}))