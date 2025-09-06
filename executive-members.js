// executives.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".executive-card");

  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(60px)";
    observer.observe(card);
  });
});
