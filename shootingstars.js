document.addEventListener("click", (e) => {
  const numberOfStars = 12;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "shooting-star";

    // Position at mouse click, adjusting for scroll
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY + window.scrollY}px`;

    // Random direction and speed
    const angle = Math.random() * 2 * Math.PI;
    const distance = 200 + Math.random() * 200; // Expanded travel range

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    // Animate via CSS variables
    star.style.setProperty('--x', `${x}px`);
    star.style.setProperty('--y', `${y}px`);

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000); // remove after animation
  }
});
