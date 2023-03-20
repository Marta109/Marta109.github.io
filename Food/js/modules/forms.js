import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, openModalTimerId) {
  //! Forms
  const forms = document.querySelectorAll(formSelector);

  const messages = {
    loading: "img/form/spinner.svg",
    done: "Спасибо! Скоро мы с вами свяжемся",
    fail: "Что-то пошло не так...",
  };

  forms.forEach((el) => {
    bindPostData(el);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = messages.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
  `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const jsonObj = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", jsonObj)
        .then((data) => {
          console.log(data);
          showThanksModal(messages.done);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(messages.fail);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal(".modal", openModalTimerId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal");
    }, 4000);
  }
}

export default forms;
