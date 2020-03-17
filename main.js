const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle nav
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Close nav when 'click' on links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Close nav if 'click' outside
document.addEventListener('click', e => {
  if (
    !e.target.classList.contains('nav__list') &&
    !e.target.classList.contains('nav-toggle') &&
    !e.target.classList.contains('hamburger') &&
    !e.target.classList.contains('nav__link')
  ) {
    document.body.classList.remove('nav-open');
  }
});
