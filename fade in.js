document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  lines.forEach(line => observer.observe(line));
});
