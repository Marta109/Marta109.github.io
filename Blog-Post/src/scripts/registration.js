function createRegistrationLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement('a', { href: '../../index.html' }, 'Sign In'),
      UI.createElement('a', { href: './home.html' }, 'Home'),
    ]),
    UI.createElement('div', { class: 'form-wrapper' }, [
      UI.createElement('div', { class: 'registration-container' }, [
        UI.createElement('form', {}, [
          UI.createElement('input', {
            type: 'text',
            required: true,
            placeholder: 'First name',
          }),
          UI.createElement('input', {
            type: 'text',
            required: true,
            placeholder: 'Last name',
          }),
          UI.createElement('select', { name: 'city' }, [
            UI.createElement('option', { value: 'city' }, 'City'),
            UI.createElement('option', { value: 'Yerevan' }, 'Yerevan'),
            UI.createElement('option', { value: 'London' }, 'London'),
            UI.createElement('option', { value: 'Seoul' }, 'Seoul'),
          ]),
          UI.createElement('div', { class: 'select-option' }, [
            UI.createElement('div', {}, [
              UI.createElement('input', {
                type: 'radio',
                value: 'male',
                name: 'male',
                id: 'male',
              }),
              UI.createElement(
                'label',
                {
                  for: 'male',
                },
                'male',
              ),
            ]),
            UI.createElement('div', {}, [
              UI.createElement('input', {
                type: 'radio',
                value: 'female',
                name: 'female',
                id: 'female',
              }),
              UI.createElement(
                'label',
                {
                  for: 'female',
                },
                'female',
              ),
            ]),
          ]),
          UI.createElement('div', { class: 'registration-submit' }, [
            UI.createElement('div', { class: 'checkbox-send' }, [
              UI.createElement('input', {
                type: 'checkbox',
                id: 'email',
              }),
              UI.createElement(
                'label',
                {
                  for: 'email',
                },
                'send me email',
              ),
            ]),
            UI.createElement('button', { type: 'submit' }, 'submit'),
          ]),
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
