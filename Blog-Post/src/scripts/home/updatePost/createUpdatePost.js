import UI from '../../utils/utils.js';
import updatePostHandler from './updateHandler.js';

const createUpdatePost = (data) => {
  if (!data) return;

  const author = data.author.split(' ');
  const container = UI.createElement(
    'div',
    { class: 'modal update-post-modal', tabindex: '-1' },
    [
      UI.createElement('div', { class: 'modal-dialog' }, [
        UI.createElement('div', { class: 'modal-content' }, [
          UI.createElement('div', { class: 'modal-header' }, [
            UI.createElement('div', { class: 'modal-title h5' }, 'Edit Post'),
            UI.createElement('button', {
              type: 'button',
              class: 'btn-close',
              'data-bs-dismiss': 'modal',
              'aria-label': 'Close',
            }),
          ]),
          UI.createElement('div', { class: 'modal-body' }, [
            UI.createElement('div', { class: 'author-info input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Author'),
              UI.createElement('input', {
                placeholder: 'First Name',
                class: 'form-control',
                name: 'firstName',
                type: 'text',
                value: author[0],
              }),
              UI.createElement('input', {
                placeholder: 'Last Name',
                class: 'form-control',
                type: 'text',
                name: 'lastName',
                value: author[1],
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Title'),
              UI.createElement('input', {
                class: 'form-control',
                type: 'text',
                placeholder: 'title',
                name: 'title',
                value: data.title,
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement(
                'span',
                { class: 'input-group-text' },
                'Current Image',
              ),
              UI.createElement('input', {
                class: 'form-control',
                name: 'imgLink',
                type: 'text',
                placeholder: 'img url',
                alt: 'post img',
                value: data.img,
                disabled: true,
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement('input', {
                class: 'form-control form-control-lg',
                type: 'file',
                name: 'fileUpload',
                id: 'fileUpload',
                required: true,
              }),
              UI.createElement('label', {
                class: 'form-label',
                for: 'fileUpload',
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
                UI.createElement(
                  'textarea',
                  {
                    class: 'form-control',
                    type: 'text',
                    name: 'story',
                    placeholder: 'story',
                  },
                  data.story,
                ),
              ],
            ),
          ]),

          UI.createElement('div', { class: 'modal-footer' }, [
            UI.createElement(
              'button',
              {
                type: 'button',
                class: 'btn btn-dark btn-lg btn-block',
                'data-bs-dismiss': 'modal',
                id: 'close-edit-modal',
              },
              'Close',
            ),
            UI.createElement(
              'button',
              {
                'data-mdb-button-init': '',
                'data-mdb-ripple-init': '',
                class: 'btn btn-dark btn-lg btn-block',
                type: 'submit',
                id: 'update-post',
                required: 'true',
              },
              'Save changes',
            ),
          ]),
        ]),
      ]),
    ],
  );

  UI.render(container, document.body);
  updatePostHandler(data.id);
};

export default createUpdatePost;
