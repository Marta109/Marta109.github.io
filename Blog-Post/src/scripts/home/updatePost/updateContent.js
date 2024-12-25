import { createNotification } from '../../notification/createNotification.js';
import ValidationUpdatePost from '../../validation/updatePost.js';

const updatePostContent = ({ title, authorName, story, img }, id) => {
  try {
    const parent = document.getElementById(id);

    ValidationUpdatePost.isParentElem(parent);
    const titleElem = parent.querySelector('.card-title');
    const authorElem = parent.querySelector('.card-subtitle');
    const storyElem = parent.querySelector('.card-text');
    const imageElem = parent.querySelector('img');

    titleElem.textContent = title;
    authorElem.textContent = authorName;
    storyElem.textContent = story;
    imageElem.src = img;
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
};

export default updatePostContent;
