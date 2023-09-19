const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header");
const heightHero = heroSection.clientHeight;

window.addEventListener("scroll", () => {
  makeLogoVisible();
});

const makeLogoVisible = () => {
  if (window.scrollY < heightHero) {
    header.classList.add("header--is-hidden");
  } else {
    header.classList.remove("header--is-hidden");
  }
};
