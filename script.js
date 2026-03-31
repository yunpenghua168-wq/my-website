// Scroll reveal
const revealEls = document.querySelectorAll('.service-card, .stat-item, .contact-item');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 10
    ? 'rgba(255,255,255,0.92)'
    : 'rgba(255,255,255,0.82)';
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '发送中...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('visible');
    e.target.reset();
    btn.textContent = '发送消息';
    btn.disabled = false;
  }, 1000);
}
