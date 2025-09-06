// about.js

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll("[data-scroll]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  scrollElements.forEach((el) => {
    observer.observe(el);
  });
});
