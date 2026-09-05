const menuToggle = document.querySelector(".menu-bar");
const nav = document.querySelector("nav");
const overlay = document.createElement("div");

// cria overlay para escurecer o fundo quando o menu abre
overlay.classList.add("overlay");
document.body.appendChild(overlay);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

// fecha o menu ao clicar fora
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

const icon=document.querySelector('.mudar_fundo')
const body=document.querySelector('body')
console.log(icon)
console.log(body)

icon.addEventListener('click', (evt)=>{
  body.classList.toggle('fundo')
})