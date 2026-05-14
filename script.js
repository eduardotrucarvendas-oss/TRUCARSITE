const CONTACT = {
  whatsappNumber: "5548988337910",
  whatsappDisplay: "+55 (48) 98833-7910"
};

const OFFERS = [
  { title: "Promoção da semana", text: "Chapas selecionadas com condição especial para retirada programada." },
  { title: "Material de segunda", text: "Lotes com excelente custo-benefício, sob consulta de disponibilidade." },
  { title: "Entrega quarta-feira", text: "Roteiro regional com vagas para nova programação de entrega." },
  { title: "Lote especial", text: "Tubos e perfis com oportunidade para fechamento rápido." },
  { title: "Estoque limitado", text: "Galvanizados com volume restrito para pronta negociação." }
];

function setupWhatsAppLinks() {
  const baseUrl = `https://wa.me/${CONTACT.whatsappNumber}`;
  const message = encodeURIComponent("Olá! Quero solicitar um orçamento na TRUCAR Metal Center.");
  const fullUrl = `${baseUrl}?text=${message}`;

  const ids = ["headerWhatsApp", "heroWhatsApp", "floatWhatsApp", "textWhatsApp", "footerWhatsApp"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = fullUrl;
    if (id === "textWhatsApp" || id === "footerWhatsApp") {
      el.textContent = CONTACT.whatsappDisplay;
    } else {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll(".mini-whats").forEach((link) => {
    link.href = fullUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function renderOffers() {
  const slider = document.getElementById("offerSlider");
  if (!slider) return;

  slider.innerHTML = OFFERS.map((offer) => `
    <article class="offer-item">
      <p class="eyebrow">OFERTA</p>
      <h3>${offer.title}</h3>
      <p>${offer.text}</p>
      <a class="mini-whats" href="#">Cotar agora</a>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderOffers();
setupWhatsAppLinks();
