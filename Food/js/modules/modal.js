function openModal(modalSelector, openModalTimerId) {
  const modal = document.querySelector(modalSelector);
  // modal.classList.toggle("show");
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  if (openModalTimerId) {
    clearInterval(openModalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  // modal.classList.toggle("show");
}

function modal(trigerSelector, modalSelector, openModalTimerId) {
  //! Modal window
  const openModalbtn = document.querySelectorAll(trigerSelector),
    // closeModalbtn = document.querySelector("[data-close]"),
    modal = document.querySelector(modalSelector);

  openModalbtn.forEach((el) => {
    el.addEventListener("click", () =>
      openModal(modalSelector, openModalTimerId)
    );
  });

  // closeModalbtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  window.addEventListener("scroll", showModalByScroll);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, openModalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
}

export default modal;
export {openModal, closeModal};
