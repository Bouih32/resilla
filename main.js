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
const formToggle = document.querySelectorAll("#formToggle p");
const draggable = document.querySelector("#draggable");
const draggableElements = document.querySelectorAll("#draggable section");
const filterButtons = document.querySelectorAll("#filterButtons button");
const sliders2 = document.querySelectorAll("#sliders2 span");
const blogs = document.querySelectorAll(".blogs");

function removeHighlight(slider) {
  slider.classList.remove("bg-secondary");
  slider.classList.add("bg-white/50");
}

function addHighlight(slider) {
  slider.classList.remove("bg-white/50");
  slider.classList.add("bg-secondary");
}

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
    removeHighlight(slider);
    if (Number(slider.dataset.slide) === i) {
      addHighlight(slider);
    }
  });
});

rightArrow.addEventListener("click", () => {
  i == 3 ? (i = 0) : i++;
  hero.src = photos[i];
  sliders.forEach((slider) => {
    removeHighlight(slider);
    if (Number(slider.dataset.slide) === i) {
      addHighlight(slider);
    }
  });
});

sliders.forEach((slider) => {
  slider.addEventListener("click", (e) => {
    hero.src = photos[e.target.dataset.slide];
    i = Number(e.target.dataset.slide);
    sliders.forEach((slider) => {
      removeHighlight(slider);
      if (slider === e.target) {
        addHighlight(slider);
      }
    });
  });
});

function handleErrors() {
  if (formInput.value === "") {
    formInput.classList.add(
      "border",
      "placeholder:text-red-700",
      "border-red-700"
    );
  }

  if (firstSelect.selectedIndex === 0) {
    firstSelect.classList.add("border", "text-red-700", "border-red-700");
  }

  if (secondSelect.selectedIndex === 0) {
    secondSelect.classList.add("border", "text-red-700", "border-red-700");
  }
}

searchButton.addEventListener("click", () => {
  handleErrors();
});

formToggle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    formToggle.forEach((ele) => {
      ele.classList.remove(
        "before:bg-main",
        "before:-translate-x-[25%]",
        "sm:before:w-[150px]",
        "before:w-[100px]",
        "before:h-[3px]",
        "relative",
        "before:absolute",
        "before:-bottom-[29px]"
      );
    });

    if (ele == e.target)
      ele.classList.add(
        "before:bg-main",
        "before:-translate-x-[25%]",
        "sm:before:w-[150px]",
        "before:w-[100px]",
        "before:h-[3px]",
        "relative",
        "before:absolute",
        "before:-bottom-[29px]"
      );
  });
});

function filterHouses(textFilter) {
  draggableElements.forEach((ele) => {
    ele.style.display = "none";
    if (ele.dataset.tab == textFilter) {
      ele.style.display = "initial";
    }

    if (textFilter == "All") ele.style.display = "initial";
  });
}

filterButtons.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    filterHouses(ele.innerText);
    filterButtons.forEach((ele) => {
      ele.classList.remove("bg-main", "text-white");
      if ((ele = e.target)) ele.classList.add("bg-main", "text-white");
      ele.classList.add("text-main");
    });
  });
});

isDragging = false;
let startPosition, scrollPosition;

function startDragging(e) {
  isDragging = true;
  startPosition = e.pageX;
  scrollPosition = draggable.scrollLeft;
}

function dragElements(e) {
  if (!isDragging) return;
  draggable.scrollLeft = scrollPosition - (e.pageX - startPosition);
}

draggable.addEventListener("mousedown", startDragging);
draggable.addEventListener("mousemove", dragElements);
draggable.addEventListener("mouseup", () => (isDragging = false));

function toggleBlogs(data) {
  blogs.forEach((ele) => {
    ele.classList.add("hidden"),
      document.querySelector(data).classList.remove("hidden");
  });
}

sliders2.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    sliders2.forEach((ele) => {
      ele.classList.remove("bg-white");
      ele.classList.add("bg-white/50");
      if (ele == e.target) {
        ele.classList.add("bg-white");
        ele.classList.remove("bg-white/50");
      }
    });
    toggleBlogs(e.target.dataset.blog);
  });
});

console.log(blogs);
