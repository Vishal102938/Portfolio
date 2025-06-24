window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar-fill");

  bars.forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = level;
    }, 200); 
  });
});