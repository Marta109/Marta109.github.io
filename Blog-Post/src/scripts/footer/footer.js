const createFooter = () => {
  return UI.createElement(
    'footer',
    { class: 'footer', id: 'time-footer' },
    Date().toString(),
  );
};

const updateFooter = () => {
  const section = document.querySelector('div.section');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('div.section'));
};

export { createFooter, updateFooter };
