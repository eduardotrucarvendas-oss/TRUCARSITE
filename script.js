const CONTACT = {
  whatsappNumber: "5547991234567",
  whatsappDisplay: "+55 (47) 99123-4567"
};

function setupWhatsAppLinks() {
  const baseUrl = `https://wa.me/${CONTACT.whatsappNumber}`;
  const message = encodeURIComponent("Olá! Quero solicitar um orçamento na TRUCAR Metal Center.");
  const fullUrl = `${baseUrl}?text=${message}`;

  ["headerWhatsApp", "heroWhatsApp", "floatWhatsApp", "textWhatsApp", "footerWhatsApp"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = fullUrl;
    if (id === "textWhatsApp" || id === "footerWhatsApp") el.textContent = CONTACT.whatsappDisplay;
    if (id !== "textWhatsApp" && id !== "footerWhatsApp") {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
setupWhatsAppLinks();
