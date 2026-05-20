// ── NAV TOGGLE ──
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('navOverlay');
const navClose   = document.getElementById('navClose');

hamburger.addEventListener('click', () => navOverlay.classList.add('open'));
navClose.addEventListener('click',  () => navOverlay.classList.remove('open'));

// Close on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navOverlay.classList.remove('open'));
});

// ── SCROLL REVEAL ──
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

sections.forEach(section => observer.observe(section));
