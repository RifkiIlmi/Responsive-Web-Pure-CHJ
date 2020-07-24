topBtn = document.getElementById("topBtn");
const idHref = document.querySelectorAll('a[href^="#"]');
const nav = document.querySelector("nav ul");

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

idHref.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = document.querySelector(this.getAttribute("href"));
    href.scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function gotoTop() {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

searchIcon.addEventListener("click", function () {
  if (searchBox.style.top == "72px") {
    searchBox.style.top = "24px";
    searchBox.style.pointerEvents = "none";
  } else {
    searchBox.style.top = "72px";
    searchBox.style.pointerEvents = "auto";
  }
});

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
  }
});
