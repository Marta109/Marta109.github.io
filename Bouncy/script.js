window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.background = "transparent";
  }
});
