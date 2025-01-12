import UI from '../utils/utils.js';
import Storage from '../../../data/storage.js';

function createHeader(links, bool = false) {
  let defaultBtns = [
    {
      name: 'New Post',
      id: 'createNewPost',
      href: '#',
    },
    {
      name: 'Log Out',
      id: 'log-out',
      href: '#',
    },
  ];

  if (bool) defaultBtns = links;

  let btns = [];
  if (Storage.hasUser()) {
    const avatar =
      Storage.getUserData.avatar ||
      'https://avatars.githubusercontent.com/u/56305452?v=4?s=400';
    btns = [
      UI.createElement('img', {
        src: avatar,
        class: 'rounded-circle avatar-small',
        alt: 'Avatar',
        href: '#',
      }),

      ...defaultBtns.map((el) => {
        return UI.createElement(
          'a',
          { class: 'btn btn-dark', href: el.href, id: el.id },
          el.name,
        );
      }),
    ];
  } else {
    btns = links.map((el) => {
      return UI.createElement(
        'a',
        { class: 'btn btn-dark', href: el.href },
        el.name,
      );
    });
  }

  return UI.createElement('header', { class: 'header' }, [
    ...btns,
    UI.createElement('button', { class: 'toggle-theme btn btn-dark' }, [
      UI.createElement('i', { class: 'fas fa-moon' }),
    ]),
  ]);
}

export default createHeader;
