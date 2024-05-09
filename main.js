const mobileNav = document.querySelector("#mobileNav");
const burger = document.querySelector("#burger");
const hero = document.querySelector("#hero");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const sliders = document.querySelectorAll("#sliders span");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

const photos = [
  "images/hero.png",
  "images/list1.png",
  "images/list2.png",
  "images/list3.png",
];

let i = 0;

leftArrow.addEventListener("click", () => {
  i == 0 ? (i = 3) : i--;
  hero.src = photos[i];
  sliders.forEach((slider) => {
    slider.classList.remove("bg-secondary");
    slider.classList.add("bg-white/50");
    if (Number(slider.dataset.slide) === i) {
      slider.classList.remove("bg-white/50");
      slider.classList.add("bg-secondary");
    }
  });
});

rightArrow.addEventListener("click", () => {
  i == 3 ? (i = 0) : i++;
  hero.src = photos[i];
  sliders.forEach((slider) => {
    slider.classList.remove("bg-secondary");
    slider.classList.add("bg-white/50");
    if (Number(slider.dataset.slide) === i) {
      slider.classList.remove("bg-white/50");
      slider.classList.add("bg-secondary");
    }
  });
});

sliders.forEach((slider) => {
  slider.addEventListener("click", (e) => {
    hero.src = photos[e.target.dataset.slide];
    console.log(e.target.dataset.slide);
  });
});
