const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = document.getElementById("themeIcon");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  themeToggle.classList.toggle("rotate");

  // Ikona almashtirish (sun <-> moon)
  if (body.classList.contains("dark")) {
    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");
  } else {
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
  }
});
