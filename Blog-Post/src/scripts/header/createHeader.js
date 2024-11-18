function createHeader(links, bool = false) {
  let defaultBtns = [
    {
      name: 'Create Blog',
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
  if (sessionStorage.getItem('user')) {
    btns = [
      UI.createElement('img', {
        src: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
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
