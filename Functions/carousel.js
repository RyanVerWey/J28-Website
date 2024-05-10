document.addEventListener('DOMContentLoaded', (event) => {
    const prevBtn = document.querySelector("div.prev-arrow");
    const nextBtn = document.querySelector("div.next-arrow");
    const sectionContainer = document.querySelector("div.carousel-sections");

    prevBtn.onclick = prev;
    nextBtn.onclick = next;

    let currentIndex = 0;
    let slides = [];
    let dots = [];

    function render() {
      let offset = 0;
      slides.forEach((slide, index) => {
        if (index < currentIndex) {
          offset += slide.offsetWidth;
        }
      });

      sectionContainer.style.transform = `translateX(-${offset}px)`;
      dots.forEach((dot, index) => {
        index === currentIndex
          ? dot.classList.add("active")
          : dot.classList.remove("active");
      });
    }

    function prev() {
      // Loop to the last slide if on the first slide
      if (currentIndex === 0) {
        currentIndex = slides.length - 1;
      } else {
        currentIndex -= 1;
      }
      render();
    }

    function next() {
      // Loop to the first slide if on the last slide
      if (currentIndex === slides.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      render();
    }

    function goto(newIndex) {
      if (newIndex < 0 || newIndex >= slides.length) return;
      currentIndex = newIndex;
      render();
    }

    function init() {
      const newSlides = document.querySelectorAll("div.carousel-sections > div");
      slides = Array.from(newSlides); // Ensure it's an array

      const newDots = document.querySelectorAll("div.carousel-dots > div");
      newDots.forEach((dot, index) => {
        dot.onclick = () => goto(index);
      });
      dots = Array.from(newDots);

      render();
    }

    init();
  });