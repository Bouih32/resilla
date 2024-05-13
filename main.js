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
const sliders3 = document.querySelectorAll("#sliders3 span");
const reviewSection = document.querySelectorAll(".reviewSection");
const reviewLeftArrow = document.querySelector("#reviewLeftArrow");
const reviewRightArrow = document.querySelector("#reviewRightArrow");
const formInfo = document.querySelector("#formInfo");
const success = document.querySelector("#success");
const noAnimation = document.querySelectorAll(".noAnimation");

function changeSliderColor(i) {
  hero.src = photos[i];
  sliders.forEach((slider) => {
    slider.classList.remove("bg-secondary");
    slider.classList.add("bg-white/50");
    if (Number(slider.dataset.slide) === i) {
      slider.classList.remove("bg-white/50");
      slider.classList.add("bg-secondary");
    }
  });
}

function animateToRight(ele) {
  ele.classList.remove("animateToLeft");
  ele.classList.add("animateToRight");
  setTimeout(() => {
    ele.classList.remove("animateToRight");
  }, 300);
}

function animateToLeft(ele) {
  ele.classList.remove("animateToRight");
  ele.classList.add("animateToLeft");
  setTimeout(() => {
    ele.classList.remove("animateToLeft");
  }, 300);
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
  animateToLeft(hero);
  changeSliderColor(i);
});

rightArrow.addEventListener("click", () => {
  i == 3 ? (i = 0) : i++;
  animateToRight(hero);
  changeSliderColor(i);
});

sliders.forEach((slider) => {
  slider.addEventListener("click", (e) => {
    i = Number(e.target.dataset.slide);
    changeSliderColor(i);
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
  if (
    formInput.value === "" ||
    firstSelect.selectedIndex === 0 ||
    secondSelect.selectedIndex === 0
  ) {
    handleErrors();
    return;
  }

  formInfo.style.display = "none";
  success.classList.remove("hidden");
  success.classList.add("animateToTop");
});

formToggle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    formInfo.style.display = "block";
    success.classList.add("hidden");
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
      ele.classList.add("text-main");
      if ((ele = e.target)) ele.classList.add("bg-main", "text-white");
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
    ele.classList.add("hidden");
    const elementToShow = document.querySelector(data);
    elementToShow.classList.remove("hidden");
    animateToRight(elementToShow);
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

let reviewsArr = Array.from(reviewSection);

let i2 = 0;
sliders3.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    sliders3.forEach((ele) => {
      ele.classList.remove("bg-[#808080]");
      ele.classList.add("bg-[#AAAAAA]");
    });

    if (ele == e.target) {
      ele.classList.add("bg-[#808080]");
      ele.classList.remove("bg-[#AAAAAA]");
    }

    reviewsArr.forEach((review) => {
      review.classList.add("hidden");
    });
    reviewToShow = reviewsArr[Number(ele.dataset.review)];
    reviewToShow.classList.remove("hidden");
    animateToRight(reviewToShow);
    i2 = Number(ele.dataset.review);
  });
});

function toggleReview(i2) {
  reviewsArr.forEach((review) => {
    review.classList.add("hidden");
  });
  reviewToShow = reviewsArr[i2];
  reviewToShow.classList.remove("hidden");

  sliders3.forEach((slider) => {
    slider.classList.remove("bg-[#808080]");
    slider.classList.add("bg-[#AAAAAA]");
    if (Number(slider.dataset.review) === i2) {
      slider.classList.remove("bg-[#AAAAAA]");
      slider.classList.add("bg-[#808080]");
    }
  });
}

reviewLeftArrow.addEventListener("click", () => {
  i2 == 0 ? (i2 = 2) : i2--;

  toggleReview(i2);
  animateToLeft(reviewToShow);
});

reviewRightArrow.addEventListener("click", () => {
  i2 == 2 ? (i2 = 0) : i2++;

  toggleReview(i2);
  animateToRight(reviewToShow);
});

console.log(noAnimation);
const observer = new IntersectionObserver((sect) => {
  sect.forEach((ele) => {
    if (ele.isIntersecting) {
      ele.target.classList.add("animateScroll");
    }
  });
});

noAnimation.forEach((ele) => observer.observe(ele));
