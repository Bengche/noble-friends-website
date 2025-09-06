const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && e.target !== hamburger) {
    mobileNav.classList.remove("active");
  }
});

// Optional: Enhance with play/pause toggle
// const anthemVideo = document.querySelector(".anthem-video");

// anthemVideo.addEventListener("click", () => {
//   if (anthemVideo.paused) {
//     anthemVideo.play();
//   } else {
//     anthemVideo.pause();
//   }
// });
const aboutSection = document.querySelector(".about-section");

const revealOnScroll = () => {
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    aboutSection.classList.add("visible");
  }
};

window.addEventListener("scroll", revealOnScroll);
const counters = document.querySelectorAll(".stat-number");

const animateStats = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 200;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

let statsRevealed = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".quick-stats-section");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight * 0.9 && !statsRevealed) {
    statsRevealed = true;
    animateStats();
  }
});
const mvpSection = document.querySelector(".mission-values-section");
const constitutionSection = document.querySelector(
  ".constitution-download-section"
);

const revealSection = (section) => {
  const pos = section.getBoundingClientRect().top;
  if (pos < window.innerHeight * 0.85) {
    section.classList.add("visible");
  }
};

window.addEventListener("scroll", () => {
  revealSection(mvpSection);
  revealSection(constitutionSection);
});

// banner-carousel.js (Plain JavaScript, VS Code compatible)

document.addEventListener("DOMContentLoaded", function () {
  var track = document.querySelector(".carousel-track");
  var slides = document.querySelectorAll(".carousel-image");
  var dots = document.querySelectorAll(".nav-dot");
  var modal = document.getElementById("carouselModal");
  var modalImg = document.getElementById("modalImg");
  var closeModal = document.getElementById("closeModal");

  var currentIndex = 0;
  var interval = setInterval(nextSlide, 5000);

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlide();
  }

  function updateSlide() {
    track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[currentIndex].classList.add("active");
  }

  for (var j = 0; j < dots.length; j++) {
    dots[j].addEventListener("click", function (e) {
      clearInterval(interval);
      currentIndex = parseInt(this.getAttribute("data-index"));
      updateSlide();
      interval = setInterval(nextSlide, 5000);
    });
  }

  for (var k = 0; k < slides.length; k++) {
    slides[k].addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  }

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Swipe Support var startX = 0;

  track.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", function (e) {
    var endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      clearInterval(interval);
      nextSlide();
      interval = setInterval(nextSlide, 5000);
    } else if (endX - startX > 50) {
      clearInterval(interval);
      currentIndex--;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      updateSlide();
      interval = setInterval(nextSlide, 5000);
    }
  });
});
