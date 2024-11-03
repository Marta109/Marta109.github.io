import { posts } from '../../data/data.js';

const createPosts = () => {
  let section = [];
  posts.forEach((el) => {
    el = UI.createElement('section', { class: 'box' }, [
      UI.createElement('div', { class: 'card' }, [
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
    section.push(el);
  });

  return section;
};

export default createPosts;
