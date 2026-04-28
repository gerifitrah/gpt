const profileData = {
  summary:
    'Product-minded developer/designer with interests in education technology, web experiences, and usable interface systems.',
  location: 'Bandung, Indonesia',
};

document.getElementById('summaryText').textContent = profileData.summary;
document.getElementById('locationText').textContent = profileData.location;
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! Your message has been saved. I will reply soon.';
  form.reset();
});
