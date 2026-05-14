const CONTACT = {
  whatsappNumber: "5548988337910",
  whatsappDisplay: "+55 (48) 98833-7910"
};

// Edite apenas esta lista semanalmente para atualizar as ofertas do site.
const OFFERS = [
  { title: "Promoção da semana", text: "Chapas selecionadas com condição comercial especial." },
  { title: "Lote especial", text: "Tubos e perfis com disponibilidade limitada." },
  { title: "Material de segunda", text: "Saldos por kg com ótimo custo-benefício." },
  { title: "Entrega programada", text: "Rotas regionais com novas vagas para esta semana." }
];

function buildWhatsAppUrl() {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  const text = encodeURIComponent("Olá! Quero solicitar um orçamento na TRUCAR Metal Center.");
  return `${base}?text=${text}`;
}

function setupWhatsApp() {
  const url = buildWhatsAppUrl();
  ["headerWhatsApp", "heroWhatsApp", "opportunityWhatsApp", "floatWhatsApp", "textWhatsApp", "footerWhatsApp"].forEach((id) => {
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
  root.innerHTML = OFFERS.map((offer) => `
    <article class="offer-card">
      <p class="kicker">OFERTA</p>
      <h3>${offer.title}</h3>
      <p>${offer.text}</p>
      <a class="mini-whats" href="#">Cotar agora</a>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderOffers();
setupWhatsApp();
