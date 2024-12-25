import { createNotification } from '../../notification/createNotification.js';
import ValidationUpdatePost from '../../validation/updatePost.js';
import createUpdatePost from './createUpdatePost.js';

const getOldPostData = (parent) => {
  try {
    ValidationUpdatePost.isParentElem(parent);
    const title = parent.querySelector('.card-title');
    const author = parent.querySelector('.card-subtitle');
    const story = parent.querySelector('.card-text');
    const img = parent.querySelector('img');

    const oldPostData = {
      id: parent.id,
      title: title.textContent,
      author: author.textContent,
      story: story.textContent,
      img: img.src,
    };

    try {
      ValidationUpdatePost.validateOldData(oldPostData);
      createUpdatePost(oldPostData, parent);
    } catch (error) {
      createNotification('error', error.message);
      console.error(error);
    }
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
};

export default getOldPostData;
