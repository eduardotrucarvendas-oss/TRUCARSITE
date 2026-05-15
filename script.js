const CONTACT = {
  whatsappNumber: "5548988337910",
  whatsappDisplay: "+55 (48) 98833-7910"
};

const OFFERS = [
  { title: "Chapas em destaque", text: "Condição especial para lotes da semana." },
  { title: "Tubos com giro rápido", text: "Estoque ativo e disponibilidade sob consulta." },
  { title: "Material de oportunidade", text: "Saldos com preço competitivo por kg." }
];

function whatsappUrl() {
  const msg = encodeURIComponent("Olá! Quero solicitar um orçamento na TRUCAR Metal Center.");
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`;
}

function bindWhatsApp() {
  const url = whatsappUrl();
  ["headerWhatsApp", "heroWhatsApp", "floatWhatsApp", "textWhatsApp", "footerWhatsApp"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = url;
    if (id === "textWhatsApp" || id === "footerWhatsApp") {
      el.textContent = CONTACT.whatsappDisplay;
    } else {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll(".mini-whats").forEach((el) => {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

function renderOffers() {
  const root = document.getElementById("offersGrid");
  root.innerHTML = OFFERS.map((item) => `
    <article class="offer-card">
      <p class="kicker">OFERTA</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="mini-whats" href="#">Cotar agora</a>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderOffers();
bindWhatsApp();
