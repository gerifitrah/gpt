const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Thanks! Your message has been captured.';
  form.reset();
});
