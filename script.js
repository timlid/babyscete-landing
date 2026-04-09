const bgImages = [
  'images/photo_2026-04-07_06-01-00.jpg',
  'images/photo_2026-04-09_16-55-53.jpg',
  'images/photo_2026-04-09_17-51-20.jpg',
];

let current = 0;
let autoplayTimer = null;

const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  current = index;
  slides.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
  resetAutoplay();
}

function nextSlide() {
  goToSlide((current + 1) % bgImages.length);
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, 3500);
}

// Swipe support
let touchStartX = 0;
let touchStartY = 0;
const slider = document.getElementById('slider');

slider.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

slider.addEventListener('touchend', e => {
  const dx = touchStartX - e.changedTouches[0].clientX;
  const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
  // Only swipe if horizontal movement dominates
  if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
    if (dx > 0) goToSlide((current + 1) % bgImages.length);
    else goToSlide((current - 1 + bgImages.length) % bgImages.length);
  }
});

resetAutoplay();
