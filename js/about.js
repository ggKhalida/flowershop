document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Анимации появления блоков
  const blocks = document.querySelectorAll("[data-animation]");
  blocks.forEach((block) => {
    const animationType = block.dataset.animation;

    const animationSettings = {
      opacity: 0,
      y: animationType.includes("left") ? 50 : -50,
      x: animationType.includes("left") ? -100 : 100,
      duration: 1,
      ease: "power2.out",
    };

    gsap.from(block, {
      ...animationSettings,
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Плавная прокрутка по ссылкам
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("href");
      if (target && document.querySelector(target)) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power2.inOut",
        });
      }
    });
  });
});
