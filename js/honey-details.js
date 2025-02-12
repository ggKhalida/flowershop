document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Анимация появления изображения
  gsap.from(".honey-details__image", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".honey-details__image",
      start: "top 80%",
    },
  });

  // Анимация появления текста
  gsap.from(".honey-details__info", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".honey-details__info",
      start: "top 80%",
    },
  });
});
