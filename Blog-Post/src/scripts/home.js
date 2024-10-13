function createHomeLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement('a', { href: '../../index.html' }, 'Sign in'),
      UI.createElement('a', { href: './registration.html' }, 'sign up'),
    ]),
    UI.createElement('main', { class: 'main-section' }, [
      UI.createElement('nav', { class: 'sidebar' }, 'sidebar'),
      UI.createElement('div', { class: 'section' }, [
        UI.createElement('section', { class: 'box' }, 'section'),
        UI.createElement('section', { class: 'box' }, 'section'),
        createFooter(),
      ]),
    ]),
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
  const section = document.querySelector('div.section');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('div.section'));
}, 1000);

createHomeLayout();
