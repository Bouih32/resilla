const mobileNav = document.querySelector("#mobileNav");
const burger = document.querySelector("#burger");
const hero = document.querySelector("#hero");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const sliders = document.querySelectorAll("#sliders span");
const searchButton = document.querySelector("#searchButton");
const formInput = document.querySelector("#formInput");
const firstSelect = document.querySelector("#firstSelect");
const secondSelect = document.querySelector("#secondSelect");

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
    sliders.forEach((slider) => {
      slider.classList.remove("bg-secondary");
      slider.classList.add("bg-white/50");
      if (slider === e.target) {
        slider.classList.remove("bg-white/50");
        slider.classList.add("bg-secondary");
      }
    });
  });
});

function handleErrors() {
  if (formInput.value === "") {
    formInput.classList.add("border");
    formInput.classList.add("placeholder:text-red-700");
    formInput.classList.add("border-red-700");
  }

  if (firstSelect.selectedIndex === 0) {
    firstSelect.classList.add("border");
    firstSelect.classList.add("text-red-700");
    firstSelect.classList.add("border-red-700");
  }

  if (secondSelect.selectedIndex === 0) {
    secondSelect.classList.add("border");
    secondSelect.classList.add("text-red-700");
    secondSelect.classList.add("border-red-700");
  }
}

searchButton.addEventListener("click", () => {
  handleErrors();
});
