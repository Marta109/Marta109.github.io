// const createContainer = () => {
//   const container = document.createElement('div');
//   container.setAttribute('class', 'container-root');
//   return container;
// };

// function createLoginLayout() {
//   const container = createContainer();

//   const header = document.createElement('header');
//   header.setAttribute('class', 'header');

//   const link = document.createElement('a');
//   link.setAttribute('href', 'src/pages/home.html');
//   link.innerText = 'Home';

//   const link1 = document.createElement('a');
//   link1.setAttribute('href', 'src/pages/registration.html');
//   link1.innerText = 'registration';

//   const formWrapper = document.createElement('div');
//   formWrapper.setAttribute('class', 'form-wrapper');

//   const loginContainer = document.createElement('div');
//   loginContainer.setAttribute('class', 'login-container');

//   const form = document.createElement('form');

//   const inputUsername = document.createElement('input');
//   inputUsername.setAttribute('type', 'text');
//   inputUsername.setAttribute('placeholder', 'Username');

//   const inputPassword = document.createElement('input');
//   inputPassword.setAttribute('type', 'password');
//   inputPassword.setAttribute('placeholder', 'Password');

//   const buttonLogin = document.createElement('button');
//   buttonLogin.setAttribute('type', 'submit');
//   buttonLogin.innerText = 'Login';

//   header.append(link, link1);

//   // Form
//   form.appendChild(inputUsername);
//   form.appendChild(inputPassword);
//   form.appendChild(buttonLogin);

//   loginContainer.appendChild(form);

//   formWrapper.appendChild(loginContainer);

//   container.appendChild(header);
//   container.appendChild(formWrapper);

//   document.body.appendChild(container);
// }

// createLoginLayout();

function createRegistrationLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement('a', { href: 'src/pages/registration.html' }, 'Sign up'),
      UI.createElement('a', { href: 'src/pages/home.html' }, 'Home'),
    ]),
    UI.createElement('div', { class: 'form-wrapper' }, [
      UI.createElement('div', { class: 'login-container' }, [
        UI.createElement('form', {}, [
          UI.createElement('input', {
            type: 'text',
            required: true,
            placeholder: 'Username',
          }),
          UI.createElement('input', {
            type: 'password',
            required: true,
            placeholder: 'password',
          }),

          UI.createElement('button', { type: 'submit' }, 'submit'),
        ]),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
}

function createFooter() {
  return UI.createElement(
    'footer',
    { class: 'footer', id: 'time-footer' },
    Date().toString(),
  );
}

setInterval(() => {
  const section = document.querySelector('.container-root');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('.container-root'));
}, 1000);

createRegistrationLayout();
