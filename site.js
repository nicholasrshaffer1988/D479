// Active nav highlighting
(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const path = a.getAttribute('href');
    if (path === here) a.classList.add('active');
  });
})();

// Reveal on scroll
(() => {
  const els = [...document.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
})();

// Booking form prototype
(() => {
  const f = document.getElementById('bookingForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const dateVal = f.date.value;
    const d = new Date(dateVal);
    const min = new Date();
    min.setDate(min.getDate() + 2);

    if (isNaN(d) || d < min) {
      alert('Choose a date at least 2 days from today.');
      return;
    }
    if (!f.name.value.trim() || !f.email.value.trim()) {
      alert('Name and email are required.');
      return;
    }
    alert('Reservation received. Prototype only.');
    f.reset();
  });
})();

// Contact form prototype
(() => {
  const f = document.getElementById('contactForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const name = f.cname.value.trim();
    const email = f.cemail.value.trim();
    const msg = f.cmsg.value.trim();
    if (!(name && email && msg)) {
      alert('Fill out all fields.');
      return;
    }
    alert('Message sent. Prototype only.');
    f.reset();
  });
})();
