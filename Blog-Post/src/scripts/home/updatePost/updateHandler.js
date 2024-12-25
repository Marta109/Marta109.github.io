import PostApi from '../../../../data/postApi.js';
import { createNotification } from '../../notification/createNotification.js';
import ValidationUpdatePost from '../../validation/updatePost.js';
import updatePostContent from './updateContent.js';

const updatePostHandler = (id) => {
  const postWrapper = document.querySelector('.modal.update-post-modal');

  postWrapper.addEventListener('click', (e) => {
    if (
      e.target.id === 'close-edit-modal' ||
      e.target.classList.contains('btn-close')
    ) {
      postWrapper.remove();
    } else if (e.target.id === 'update-post') {
      const title = document.querySelector('input[name="title"]').value.trim();
      const story = document
        .querySelector('textarea[name="story"]')
        .value.trim();
      const firstName = document
        .querySelector('input[name="firstName"]')
        .value.trim();
      const lastName = document
        .querySelector('input[name="lastName"]')
        .value.trim();
      const img = document.querySelector('input[name="imgLink"]').value.trim();

      const authorName = `${firstName} ${lastName}`;
      const post = { title, story, authorName, img };

      try {
        const postData2 = { ...post };
        postData2.authorFirstName = firstName;
        postData2.authorLastName = lastName;
        ValidationUpdatePost.validateNewData(postData2);
        PostApi.updatePost(id, post).then(() => {
          postWrapper.remove();
          updatePostContent(post, id);
          createNotification('success', 'Post updated successfully!');
        });
      } catch (error) {
        createNotification('error', error.message);
        console.error(error);
      }
    } else return;
  });
};

export default updatePostHandler;
