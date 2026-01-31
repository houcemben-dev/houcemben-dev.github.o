const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(filter=>{
  filter.addEventListener("click", ()=>{
    filters.forEach(f=>f.classList.remove("active"));
    filter.classList.add("active");

    const type = filter.dataset.type;

    cards.forEach(card=>{
      if(type === "all" || card.classList.contains(type)){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const modal = document.getElementById("contactModal");

// Ouvre la modale
function openModal() {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Ferme la modale
function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const navContact = document.querySelector('a[href="#contact"]');
if (navContact) {
  navContact.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
}

// ✅ 2) Fermer en cliquant sur overlay / bouton fermer
document.addEventListener("click", (e) => {
  if (!modal) return;
  if (!modal.classList.contains("is-open")) return;

  if (e.target.matches("[data-close]")) closeModal();
});

// ✅ 3) Fermer avec la touche ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  if (!modal) return;

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Ouvrir depuis le menu "Me contacter"
  const navContact = document.querySelector('a[href="#contact"]');
  if (navContact) {
    navContact.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Fermer (overlay + boutons data-close)
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // TEST RAPIDE : tu peux ouvrir la modale depuis la console en tapant openContact()
  window.openContact = openModal;
});