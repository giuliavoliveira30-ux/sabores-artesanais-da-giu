const WHATSAPP = "5511987654321"; // TROQUE pelo WhatsApp real, somente números com DDI + DDD.
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuBtn?.addEventListener("click",()=>menu.classList.toggle("open"));
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

document.querySelectorAll("[data-whatsapp]").forEach(a=>{
  const msg = encodeURIComponent("Olá! Vim pelo site da Sabores Artesanais da Giu e gostaria de fazer um pedido.");
  a.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
});

const data = {
  "Bolos": ["Bolo de Chocolate — R$ 89,90", "Bolo de Morango — R$ 94,90", "Bolo de Ninho — R$ 92,90"],
  "Bolos Personalizados": ["Tema infantil — a partir de R$ 129,90", "Festa — a partir de R$ 149,90", "Bolo especial — consulte"],
  "Doces": ["Brigadeiro Gourmet — R$ 4,50", "Beijinho — R$ 4,00", "Brigadeiro de Morango — R$ 4,50"],
  "Sobremesas": ["Taça de Morango — R$ 16,90", "Pavê Especial — R$ 18,90", "Banoffee — R$ 19,90"]
};
function showCategory(name){
  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-content").innerHTML = "<ul>"+data[name].map(x=>`<li>${x}</li>`).join("")+"</ul>";
  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.getElementById("modal").setAttribute("aria-hidden","true");
}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
