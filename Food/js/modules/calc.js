function calc() {
  //! Calc///////////////////////
  const result = document.querySelector(".calculating__result span");
  let gender, height, weight, age, ratio;

  if (localStorage.getItem("gender")) {
    gender = localStorage.getItem("gender");
  } else {
    gender = "female";
    localStorage.setItem("gender", "female");
  }
  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  const initLocalSettings = function (selector, activClass) {
    const elem = document.querySelectorAll(`${selector} div`);
    elem.forEach((el) => {
      el.classList.remove(activClass);
      if (el.getAttribute("id") == localStorage.getItem("gender")) {
        el.classList.add(activClass);
      }
      if (el.getAttribute("data-ratio") == localStorage.getItem("ratio")) {
        el.classList.add(activClass);
      }
    });
  };
  initLocalSettings("#gender", "calculating__choose-item_active");
  initLocalSettings(".calculating__choose_big", "calculating__choose-item_active");

  const getSelectedOptions = function (selector, getProprty, activClass) {
    let parent = document.querySelector(`${selector}`);
    let chooses = parent.querySelectorAll(`${selector} div`);

    // parent.addEventListener("click", (e) => {
    //   chooses.forEach((el) => {
    //     if (el == e.target) {
    //       if (getProprty == "id") {
    //         gender = e.target.getAttribute(getProprty);
    //       } else {
    //         ratio = e.target.getAttribute(getProprty);
    //       }
    //       e.target.classList.add(activClass);
    //     } else {
    //       el.classList.remove(activClass);
    //     }
    //     calcCalorie();
    //   });
    // });

    chooses.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (getProprty == "id") {
          gender = e.target.getAttribute(getProprty);
          localStorage.setItem("gender", gender);
        } else {
          ratio = e.target.getAttribute(getProprty);
          localStorage.setItem("ratio", ratio);
        }

        chooses.forEach((el) => {
          el.classList.remove(activClass);
        });
        e.target.classList.add(activClass);
        calcCalorie();
      });
    });
  };

  const getinputOptions = function (selector) {
    const input = document.querySelector(`${selector}`);
    input.addEventListener("input", (e) => {
      if (e.target.value.match(/\D/g)) {
        e.target.style.border = "1px solid red";
      } else {
        e.target.style.border = "none";
      }
      switch (e.target.getAttribute("id")) {
        case "height":
          height = e.target.value;
          localStorage.setItem("height", height);
          break;
        case "weight":
          weight = e.target.value;
          localStorage.setItem("weight", weight);
          break;
        case "age":
          age = e.target.value;
          localStorage.setItem("age", age);
          break;
      }
      calcCalorie();
    });
  };

  function calcCalorie() {
    let resultCalc = "";
    if (!gender || !height || !weight || !age || !ratio) {
      result.textContent = "00";
      return;
    }
    if (gender == "female") {
      resultCalc = Math.round(ratio * (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age));
    } else {
      resultCalc = Math.round(ratio * (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age));
    }
    resultCalc = isNaN(resultCalc) ? "Неправильный параметр!" : resultCalc;
    result.textContent = resultCalc;
  }

  getSelectedOptions("#gender", "id", "calculating__choose-item_active");
  getSelectedOptions(".calculating__choose_big", "data-ratio", "calculating__choose-item_active");
  getinputOptions(".calculating__choose_medium");
}

export default calc;
