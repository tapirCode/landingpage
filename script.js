const menuButton = document.querySelector(".menu-button")
const navbarSection = document.querySelector(".navbar")
const sectionHeader = document.querySelector(".section-header")
menuButton.addEventListener("click",()=>{
    menuButton.classList.toggle("active")
navbarSection.classList.toggle("aktif")
})

window.addEventListener("click",(e)=>{
if (!sectionHeader.contains(e.target)) {
    menuButton.classList.remove("active")
    navbarSection.classList.remove("aktif")
}
})