const form = document.querySelector(".lead-form");

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
