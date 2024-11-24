console.log("El archivo JS está cargado correctamente.");

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");

console.log("Elemento burger:", burger);
console.log("Elemento ul:", ul);

burger.addEventListener("click", () => {
    console.log("Botón hamburguesa clicado");
    ul.classList.toggle("show");
});

 
document.addEventListener("DOMContentLoaded", () => {
  const words = ["Juan", "Creative", "Innovative", "Analytical", "Focused"];
  const textElement = document.getElementById("dynamic-text");
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    textElement.textContent = currentWord.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; 
      setTimeout(typeEffect, 500); 
    } else {
      setTimeout(typeEffect, isDeleting ? 100 : 200); 
    }
  }

  typeEffect();
});

const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const videoFrame = document.getElementById('projectVideo');

    modal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const videoURL = trigger.getAttribute('data-video');
      const title = trigger.alt;

      modal.querySelector('.modal-title').textContent = title;
      videoFrame.src = videoURL;
    });

    modal.addEventListener('hidden.bs.modal', () => {
      videoFrame.src = '';
    });
});

const formulario = document.querySelector(".formulario-contacto");

formulario.addEventListener("submit", (e) => {
const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();
  
if (!nombre || !email || !mensaje) {
    e.preventDefault();
    alert("Por favor, completa todos los campos.");
}
});
  