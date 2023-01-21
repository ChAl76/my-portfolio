const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stiky", window.scrollY > 0);
});
