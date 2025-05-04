setInterval(() => {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById("cherry-container").appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
  }, 300);