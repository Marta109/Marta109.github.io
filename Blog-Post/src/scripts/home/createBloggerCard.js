import UI from '../utils/utils.js';
import UsersApi from '../../../data/usersApi.js';
import pagination from '../pagination/pagination.js';

const createBloggerCard = async () => {
  try {
    const data = await UsersApi.getAllUsers();

    if (!data || data.length === 0) {
      console.warn('No data available or data is empty.');
      return [];
    }

    const elements = data.map((el, i) => {
      if (i < 10) {
        return UI.createElement('div', { class: 'card', id: el.id }, [
          UI.createElement('img', {
            src:
              el.avatar ||
              'https://avatars.mds.yandex.net/i?id=a312755a937797721e28e1c2d119f010_l-5175041-images-thumbs&n=13',
            class: 'rounded-circle shadow-4',
            alt: `user img`,
          }),
          UI.createElement('div', { class: 'card-body' }, [
            UI.createElement(
              'div',
              { class: 'card-title h5' },
              `${el.firstName} ${el.lastName}`,
            ),
            UI.createElement(
              'div',
              { class: 'card-descr h5' },
              `${el.username}`,
            ),
            UI.createElement('div', { class: 'card-descr h5 email' }, `${el.email}`),
          ]),
        ]);
      } else {
        return '';
      }
    });

    pagination(data);
    return elements;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export default createBloggerCard;
