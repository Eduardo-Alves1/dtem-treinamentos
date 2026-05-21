const form = document.querySelector(".lead-form");
const revealItems = document.querySelectorAll(
  ".section, .cta-section, .feature-card, .modules article, .deliverables div, .outcome-list div, .bonus-grid span"
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Interesse registrado";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
  }, 2200);
});
