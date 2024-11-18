const createFooter = () => {
  return UI.createElement(
    'footer',
    { class: 'footer', id: 'time-footer' },
    Date().toString(),
  );
};

const updateFooter = () => {
  let section = document.querySelector('div.section');
  let selector = 'div.section';
  if (!section) {
    section = document.querySelector('.container-root');
    selector = '.container-root';
  }

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector(selector));
};

export { createFooter, updateFooter };
