document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".poem p");
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("visible");
      }, index * 1200);
    });
document.addEventListener("DOMContentLoaded", () => {
        const faders = document.querySelectorAll(".fade-in");
        const options = {
            threshold: 0.1
  };
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const music = document.getElementById("bg-music");
  const btn = document.createElement("button");
  btn.className = "music-control";
  btn.innerText = "Pause Music";
  document.body.appendChild(btn);

let particles = [];
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedX: Math.random() * 0.6 - 0.3,
    speedY: Math.random() * 0.6 - 0.3,
    opacity: Math.random() * 0.6 + 0.3,
  };
}

for (let i = 0; i < 150; i++) {
  particles.push(createParticle());
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      Object.assign(p, createParticle());
    }
  }
  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.innerText = "Pause Music";
    } else {
      music.pause();
      btn.innerText = "Play Music";
    }
  });
});