const menuToggle=document.querySelector(".menu-bar")
const nav=document.querySelector("nav")

menuToggle.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})