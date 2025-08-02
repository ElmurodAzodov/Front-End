let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // pastga qarab harakat
    navbar.style.top = "-70px"; // yashir
  } else {
    // tepaga qarab harakat
    navbar.style.top = "0"; // ko‘rsat
  }

  lastScrollTop = scrollTop;
});
