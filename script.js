const menuButton = document.querySelector(".menu-button")
const navbarSection = document.querySelector(".navbar")
const sectionHeader = document.querySelector(".section-header")
const blurBody = document.querySelector('.blur-body')
const darkMode = document.querySelector('.dark-mode')

darkMode.addEventListener('click', () =>{
    alert('fitur mode dark mode, dalam proses')
    })

menuButton.addEventListener("click",()=>{
    menuButton.classList.toggle("active")
navbarSection.classList.toggle("aktif")
blurBody.classList.toggle("active-blur")
document.body.classList.toggle("body-mode")
})

window.addEventListener("click",(e)=>{
if (!sectionHeader.contains(e.target)) {
    menuButton.classList.remove("active")
    navbarSection.classList.remove("aktif")
    blurBody.classList.remove("active-blur")
    
}
})
