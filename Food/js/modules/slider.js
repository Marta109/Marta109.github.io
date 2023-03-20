function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
  const slides = document.querySelectorAll(slide),
    prevBtn = document.querySelector(prevArrow),
    nextBtn = document.querySelector(nextArrow),
    currentSlide = document.querySelector(currentCounter),
    totalSlide = document.querySelector(totalCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesFild = document.querySelector(field),
    slider = document.querySelector(container),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1,
    offset = 0;

  setCurrentTotalSlide(slideIndex);

  function setCurrentTotalSlide(slideIndex, sL = slides.length) {
    if (slides.length < 10) {
      totalSlide.textContent = `0${sL}`;
      currentSlide.textContent = `0${slideIndex}`;
    } else {
      totalSlide.textContent = sL;
      currentSlide.textContent = slideIndex;
    }
  }

  slidesFild.style.width = 100 * slides.length + "%";
  slidesFild.style.display = "flex";
  slidesFild.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";
  const indicators = document.createElement("ol");
  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  slides.forEach((el, i) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dot.setAttribute("data-slide-to", i + 1);
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
  });

  const dots = indicators.querySelectorAll(".dot");

  indicators.addEventListener("click", (e) => {
    dots.forEach((el, i) => {
      el.style.opacity = ".5";
      if (e.target == el) {
        el.style.opacity = 1;
        const slideTo = e.target.getAttribute("data-slide-to");
        slideIndex = slideTo;
        // offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        offset = replaceNumberFromString(width) * (slideTo - 1);
        slidesFild.style.transform = `translateX(-${offset}px)`;
        setCurrentTotalSlide(slideIndex);
      }
    });
  });

  nextBtn.addEventListener("click", () => {
    if (offset == replaceNumberFromString(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += replaceNumberFromString(width);
    }
    slidesFild.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    setCurrentTotalSlide(slideIndex);

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prevBtn.addEventListener("click", () => {
    if (offset == 0) {
      offset = replaceNumberFromString(width) * (slides.length - 1);
    } else {
      offset -= replaceNumberFromString(width);
    }
    slidesFild.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    setCurrentTotalSlide(slideIndex);
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  function replaceNumberFromString(str, sim = "") {
    return +str.replace(/\D/g, sim);
  }
}

export default slider;
