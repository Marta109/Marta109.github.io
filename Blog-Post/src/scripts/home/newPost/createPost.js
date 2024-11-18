import createHeader from '../../header/createHeader.js';
import { createFooter, updateFooter } from '../../footer/createFooter.js';
import { toggleThem, logOutHandler } from '../../header/headerBtnHandlers.js';
import { createNewPost } from './createPostHandler.js';

const createNewPostLayout = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log(user);

  const container = UI.createElement('div', { class: 'container-root' }, [
    createHeader(
      [
        { name: 'Home', href: './home.html' },
        {
          name: 'Log Out',
          id: 'log-out',
          href: '#',
        },
      ],
      true,
    ),

    UI.createElement('section', { class: 'create-post-container' }, [
      UI.createElement('div', { class: 'input-group mb-3  card' }, [
        UI.createElement(
          'div',
          { class: 'page-header  h1 fw-bold mb-0' },
          'Create a New Post',
        ),
        UI.createElement('div', { class: 'card' }, [
          UI.createElement('div', { class: 'card-body' }, [
            UI.createElement('div', { class: 'author-info input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Author'),
              UI.createElement('input', {
                placeholder: 'First Name',
                class: 'form-control',
                name: 'firstName',
                type: 'text',
                value: user.name,
                disabled: '',
              }),
              UI.createElement('input', {
                placeholder: 'Last Name',
                class: 'form-control',
                type: 'text',
                name: 'lastName',
                value: user.surName,
                disabled: '',
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Title'),
              UI.createElement('input', {
                class: 'form-control',
                type: 'text',
                placeholder: 'Gadfly',
                name: 'title',
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement(
                'span',
                { class: 'input-group-text' },
                'Image Link',
              ),
              UI.createElement('input', {
                class: 'form-control',
                name: 'imgLink',
                type: 'text',
                placeholder:
                  'https://sun9-23.userapi.com/impf/m-6iB189pkGwNwW7JpEGAcmP8Z2PQE7D_q92bQ/XnTJPTYJVzM.jpg?size=604x427&quality=96&sign=56773b5e3725058cb090271b5720f715&c_uniq_tag=Qf3hVdT_q5JKGtBSPmaKBfWyN_3CD3XnKYtdIaV95EM&type=album',
                alt: 'Gadfly',
              }),
            ]),

            UI.createElement(
              'div',
              {
                class: 'form-outline story-container',
                'data-mdb-input-init': '',
              },
              [
                UI.createElement(
                  'label',
                  { class: 'form-control', for: 'story' },
                  'Story',
                ),
                UI.createElement('textarea', {
                  class: 'form-control',
                  type: 'text',
                  name: 'story',
                  placeholder:
                    '*The Gadfly* is a famous novel by English writer Ethel Lilian Voynich, which tells the story of a fight for freedom and ideals. The main character, Arthur Burton, goes through betrayal, personal losses, and a transformation from a naive young man into a courageous revolutionary known as the Gadfly. This is a story about self-sacrifice, inner strength, and love that deeply touches the soul with its tragedy.',
                }),
              ],
            ),
          ]),
        ]),
        UI.createElement('div', { class: 'm-3' }, [
          UI.createElement(
            'button',
            {
              'data-mdb-button-init': '',
              'data-mdb-ripple-init': '',
              class: 'btn btn-dark btn-lg btn-block',
              type: 'submit',
              id: 'create-post',
              required: 'true',
            },
            'Create',
          ),
        ]),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
};

setInterval(() => {
  updateFooter();
}, 1000);

createNewPostLayout();
toggleThem();
logOutHandler();
createNewPost();
