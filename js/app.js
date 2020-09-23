const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
hamburger?.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

//scrolll to top
const btn = document.querySelector("#scrollTop");
document?.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
