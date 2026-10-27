const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.getElementById("reserve-form");
const success = document.querySelector(".form-success");
const header = document.querySelector(".site-header");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 40);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.hidden = true;
  if (success) success.hidden = false;
});
