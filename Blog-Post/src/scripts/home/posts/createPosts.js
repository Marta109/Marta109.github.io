import UI from '../../utils/utils.js';
import isEmptyDate from '../../../../data/startData/isEmptyDate.js';
import Storage from '../../../../data/storage.js';
import pagination from '../../pagination/pagination.js';

const createPosts = async () => {
  try {
    const data = await isEmptyDate();
    if (!data || data.length === 0) return [];

    const isUserHas = Storage.hasUser();

    const elements = data.map((el, i) => {
      if (i < 10) {
        return UI.createElement('section', { class: 'box' }, [
          UI.createElement('div', { class: 'card', id: el.id }, [
            isUserHas
              ? UI.createElement('div', { class: 'post-btn-container ' }, [
                  UI.createElement(
                    'button',
                    { class: 'toggle-theme btn btn-dark', id: 'delete-post' },
                    [UI.createElement('i', { class: 'fa-solid fa-trash' })],
                  ),
                  UI.createElement(
                    'button',
                    { class: 'toggle-theme btn btn-dark', id: 'update-post' },
                    [
                      UI.createElement('i', {
                        class: 'fa-solid fa-pencil',
                      }),
                    ],
                  ),
                ])
              : '',
            UI.createElement('div', { class: 'card-body' }, [
              UI.createElement('div', { class: 'card-descr' }, [
                UI.createElement('div', { class: 'card-title h5' }, el.title),
                UI.createElement(
                  'div',
                  { class: 'card-subtitle h4' },
                  el.authorName,
                ),
              ]),
              UI.createElement('p', { class: 'card-text' }, el.story),
            ]),
            UI.createElement('img', {
              src: el.img,
              class: 'card-img-bottom',
              alt: el.title,
            }),
          ]),
        ]);
      } else {
        return '';
      }
    });
    pagination(data, 'posts');
    return elements;
  } catch (error) {
    console.error('Error  createPosts:', error);
    return [];
  }
};

export default createPosts;
