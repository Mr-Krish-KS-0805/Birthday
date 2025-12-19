document.title = "Happy Birthday Pallavi"

// Set sister's name
document.getElementById("sisterName").textContent = "Pallavi"; // Change name here

// Confetti
function launchConfetti() {
  const duration = 10 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0 };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 100 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    }));
  }, 200);
}

// Toggle sections
function toggleGallery() {
  document.getElementById('gallery').classList.toggle('hidden');
}
function toggleMoments() {
  document.getElementById('moments').classList.toggle('hidden');
}
function showSurprise() {
  document.getElementById('surpriseMessage').classList.toggle('hidden');
}

// Music
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Countdown
// const targetTime = new Date("Jan 31, 2026 12:00:00").getTime();
// const countdownEl = document.getElementById("countdown");

// setInterval(() => {
//   const now = new Date().getTime();
//   const distance = targetTime - now;
//   const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((distance % (1000 * 60)) / 1000);
//   countdownEl.innerHTML = `Cake time in: ${hrs}h ${mins}m ${secs}s 🎂`;
// }, 1000);

// Load confetti library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';

document.head.appendChild(script);
