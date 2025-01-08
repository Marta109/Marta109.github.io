import PostApi from '../../../../data/postApi.js';
import Storage from '../../../../data/storage.js';
import { createNotification } from '../../notification/createNotification.js';
import RedirectHandler from '../../redirection/redirectHandler.js';
import checkUser from '../../utils/checkUser.js';
import getImgUrl from '../../utils/uploadImg/getImgUrl.js';
import ValidationUpdatePost from '../../validation/updatePost.js';

export const createNewPost = () => {
  const addBnt = document.querySelector('#create-post');
  if (!addBnt) return;

  addBnt.addEventListener('click', async (e) => {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();
    const story = document.querySelector('textarea[name="story"]').value.trim();
    const firstName = document
      .querySelector('input[name="firstName"]')
      .value.trim();
    const lastName = document
      .querySelector('input[name="lastName"]')
      .value.trim();
    const file = document.querySelector('#fileUpload').files[0];
    const img = await getImgUrl(file);

    try {
      ValidationUpdatePost.validateNewData({
        title,
        story,
        firstName,
        lastName,
        img,
      });

      const userId = Storage.getUserId();
      const authorName = `${firstName} ${lastName}`;
      const newPost = { title, story, authorName, img, userId };
      const token = checkUser();
      PostApi.createPost(newPost, token).then(() => {
        RedirectHandler.redirectAfterPostCreation();
      });
    } catch (error) {
      createNotification('error', error);
    }
  });
};
