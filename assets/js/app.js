const nav = document.getElementById('nav'); 
const navMenu = nav.querySelector('ul'); 
const navResponsive = document.querySelector('.nav-responsive'); 

navResponsive.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});

// Cerrar el menú al seleccionar un enlace
function seleccionar() {
    navMenu.classList.remove('active'); 
}



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