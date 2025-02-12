document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Анимация для картинок и текста
  const galleryItems = document.querySelectorAll(".gallery__item");
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    const description = item.querySelector(".gallery__description");
    const direction = item.classList.contains("left") ? "-100px" : "100px"; // Направление для картинки

    // Анимация для картинки
    gsap.fromTo(
      img,
      { opacity: 0, x: direction },
      {
        opacity: 1,
        x: "0px",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Анимация для текста (инверсно к картинке)
    gsap.fromTo(
      description,
      { opacity: 0, x: -1 * parseInt(direction) + "px" },
      {
        opacity: 1,
        x: "0px",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
