/* Existing Menu Toggle */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* Lightbox Logic */
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lbImg.src = src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when open
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

/* Existing Filter Logic (if used on other pages) */
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.g-item').forEach(item => {
    item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
  });
}

/* Existing Intersection Observer for animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.photo, .stat, .service-row, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});