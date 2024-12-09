import Storage from '../../../data/storage.js';
import { createNotification } from '../../notification/createNotification.js';

export const createNewPost = () => {
  const addBnt = document.querySelector('#create-post');
  if (!addBnt) return;

  addBnt.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]').value.trim();
    const story = document.querySelector('textarea[name="story"]').value.trim();
    const firstName = document
      .querySelector('input[name="firstName"]')
      .value.trim();
    const lastName = document
      .querySelector('input[name="lastName"]')
      .value.trim();
    const img = document.querySelector('input[name="imgLink"]').value.trim();

    if (!title || !story || !firstName || !lastName || !img) {
      createNotification('warning', 'All input fields must be filled in!');
      return;
    }

    const id = Math.random();
    const authorName = `${firstName} ${lastName}`;

    const newPost = { id, title, story, authorName, img };

    Storage.setNewPost(newPost);

    window.location.href = './home.html';
  });
};
