const menuButton = document.querySelector(".menu-button")
const navbarSection = document.querySelector(".navbar")
const sectionHeader = document.querySelector(".section-header")
const blurBody = document.querySelector('.blur-body')
const darkMode = document.querySelector('.dark-mode')
//fungsi untuk button mode dark mode
darkMode.addEventListener('click', () =>{
    alert('fitur mode dark mode, dalam proses')
    })
//fungsi untuk menambahkan/memasang class 
menuButton.addEventListener("click",()=>{
    menuButton.classList.toggle("active")
navbarSection.classList.toggle("aktif")
blurBody.classList.toggle("active-blur")
document.body.classList.toggle("body-mode")
})
//fungsi untuk menghapus class
window.addEventListener("click",(e)=>{
if (!sectionHeader.contains(e.target)) {
    menuButton.classList.remove("active")
    navbarSection.classList.remove("aktif")
    blurBody.classList.remove("active-blur")
    document.body.classList.remove("body-mode")
}
})
