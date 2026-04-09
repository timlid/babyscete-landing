const photos = [
  'images/photo_2026-04-07_06-01-00.jpg',
  'images/photo_2026-04-09_16-55-53.jpg',
  'images/photo_2026-04-09_17-51-20.jpg',
];

let current = 0;
let timer = null;

const avatarImgs = document.querySelectorAll('.avatar-img');
const dots = document.querySelectorAll('.dot');
const bg = document.getElementById('bg');

function goToSlide(index) {
  avatarImgs[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  avatarImgs[current].classList.add('active');
  dots[current].classList.add('active');
  bg.style.backgroundImage = `url('${photos[current]}')`;
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => goToSlide((current + 1) % photos.length), 3000);
}

resetTimer();
