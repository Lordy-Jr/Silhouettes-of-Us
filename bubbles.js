document.addEventListener("mousemove", (e) => {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  // Correct position accounting for scroll
  bubble.style.left = `${e.clientX}px`;
  bubble.style.top = `${e.clientY + window.scrollY}px`;

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 1000);
});