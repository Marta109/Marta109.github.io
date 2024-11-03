import { bloggers } from '../../data/data.js';

const createBloggerCard = () => {
  const bloggersCard = [];
  bloggers.forEach((el) => {
    const card = UI.createElement('div', { class: 'card' }, [
      UI.createElement('img', {
        src: el.avatar,
        class: 'rounded-circle shadow-4',
        alt: `${el.firstName} ${el.lastName}`,
      }),
      UI.createElement('div', { class: 'card-body' }, [
        UI.createElement(
          'div',
          { class: 'card-title h5' },
          `${el.firstName} ${el.lastName}`,
        ),
      ]),
    ]);
    bloggersCard.push(card);
  });
  return bloggersCard;
};

createBloggerCard();
export default createBloggerCard;
