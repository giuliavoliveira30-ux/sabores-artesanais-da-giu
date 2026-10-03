const WHATSAPP = "5519991241689";
const msg = "Olá! Vim pelo site da Sabores Artesanais da Giu e gostaria de fazer um pedido.";
document.querySelectorAll("[data-whatsapp]").forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle?.addEventListener("click",()=>menu.classList.toggle("open"));
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
