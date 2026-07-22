const revealItems = document.querySelectorAll(
  ".photo, .mag-copy, .mag-locations article, .section-head, .glass-panel, .map-strip figure"
);

revealItems.forEach((item) => item.classList.add("glass-reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

const topbar = document.querySelector(".topbar");

const updateTopbar = () => {
  topbar?.classList.toggle("is-receded", window.scrollY > 48);
};

updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });
