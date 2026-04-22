function scrollToLead() {
  document.getElementById("lead").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarFormulario(e) {
  e.preventDefault();
  alert("Contato enviado! Em breve entraremos em contato.");
}

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
