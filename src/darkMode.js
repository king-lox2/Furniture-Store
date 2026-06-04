const darkBtn = document.querySelectorAll(".dark-btn");

const fasicon = document.querySelectorAll(".fas");

darkBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const el = document.documentElement;
    el.classList.toggle("dark-mode");

    fasicon.forEach((icon) => {
      icon.classList.toggle("show");
    });
  });
});
