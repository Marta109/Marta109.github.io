function tabs(tabsParentSelector, tabsSelector, tabsContentSelecor, activeClass) {
  //! Tabs
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = tabsParent.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelecor);

  const hideTabeContenet = function () {
    tabContent.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show", "fade");
    });

    tabs.forEach((el) => {
      el.classList.remove(activeClass);
    });
  };

  const showTabeContent = function (i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  };

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((el, i) => {
        if (el == e.target) {
          hideTabeContenet();
          showTabeContent(i);
        }
      });
    }
  });

  hideTabeContenet();
  showTabeContent();
}

export default tabs;
