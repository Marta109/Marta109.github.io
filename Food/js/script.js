import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import {openModal} from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
  //! conecting with json db
  // fetch("db.json")
  //   .then((data) => data.json())
  //   .then((data) => console.log(data));
  //todo End

  const openModalTimerId = setTimeout(
    () => openModal(".modal", openModalTimerId),
    15000
  );

  tabs(
    ".tabheader__items",
    ".tabheader__item",
    ".tabcontent",
    "tabheader__item_active"
  );
  modal("[date-modal]", ".modal", openModalTimerId);
  timer(".timer", "2025-10-25");
  cards();
  calc();
  forms("form", openModalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    field: ".offer__slider-inner",
    wrapper: ".offer__slider-wrapper",
  });
});
