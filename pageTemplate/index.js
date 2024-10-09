window.onload = checkCurrentPage;

function checkCurrentPage() {
  const currentPage = window.location.pathname;
  if (currentPage.includes("login.html")) createMainLayout("login");
  else createMainLayout();
}

function createMainLayout(pageName) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const header = createHeader();
  const contentWrapper = createContentWrapper(pageName);
  const footer = createFooter();

  wrapper.append(header, contentWrapper, footer);
  document.body.append(wrapper);
}

function createIcon(className, iconClass) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = `<i class="${iconClass}"></i>`;
  return div;
}

function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = "<h1>a web page</h1>";

  const navigation = document.createElement("div");
  navigation.classList.add("nav");

  const arrowLeft = createIcon("arrow-left", "fa-solid fa-arrow-left");
  const arrowRight = createIcon("arrow-right", "fa-solid fa-arrow-right");
  const cancel = createIcon("cancel", "fa-solid fa-xmark");
  const home = createIcon("home", "fa-solid fa-house");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "http://";

  const searchBtn = document.createElement("button");
  searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

  navigation.append(arrowLeft, arrowRight, cancel, home, input, searchBtn);
  header.append(navigation);
  return header;
}

function createContentWrapper(pageName) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("content-wrapper");

  if (pageName) {
    const main = createMain("home");
    const loginForm = createLoginForm();
    wrapper.append(main, loginForm);
  } else {
    const main = createMain("log in");
    const sectionWrapper = createSectionLayout();
    wrapper.append(main, sectionWrapper);
  }

  return wrapper;
}

function createMain(pageName) {
  const main = document.createElement("main");
  const link = document.createElement("a");
  link.href = pageName === "home" ? "index.html" : "login.html";
  console.log(link.href);

  link.innerText = pageName;
  main.append(link);
  return main;
}

function createSectionLayout() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("section-wrapper");

  const navigation = createNavigation();
  const sections = createSectionWrapper();
  wrapper.append(navigation, sections);

  return wrapper;
}

function createNavigation() {
  const navigation = document.createElement("nav");
  return navigation;
}

function createSectionWrapper() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("section-container");
  for (let i = 0; i < 3; i++) {
    const section = createSection();
    wrapper.append(section);
  }

  return wrapper;
}

function createSection() {
  const section = document.createElement("section");
  return section;
}

function createFooter() {
  const footer = document.createElement("footer");
  return footer;
}

// login form--------------

function createLoginForm() {
  const form = document.createElement("form");
  form.className = "form";
  form.id = "loginForm";

  const inputName = document.createElement("input");
  inputName.className = "input";
  inputName.setAttribute("type", "text");
  inputName.placeholder = "user name";
  inputName.setAttribute("required", "");

  const inputPassword = document.createElement("input");
  inputPassword.className = "input";

  inputPassword.setAttribute("type", "password");
  inputPassword.placeholder = "Password";
  inputPassword.setAttribute("required", "");

  const button = document.createElement("button");
  button.className = "login-btn";
  button.textContent = "Log in";

  form.append(inputName, inputPassword, button);
  return form;
}
