import PostApi from '../../../../data/postApi.js';
import { createNotification } from '../../notification/createNotification.js';
import checkUser from '../../utils/checkUser.js';
// import createUpdatePost from '../updatePost/createUpdatePost.js';
import getOldPostData from '../updatePost/getOldPostData.js';

const postHandler = () => {
  const postWrapper = document.querySelector('main .section');
  postWrapper.addEventListener('click', (e) => {
    if (
      e.target.id === 'delete-post' ||
      e.target.classList.contains('fa-trash')
    ) {
      const elem = e.target.closest('.card');
      const parent = elem.closest('section');
      const token = checkUser();
      PostApi.deletePost(+elem.id, token).then((data) => {
        if (!data) {
          parent.classList.add('hidden');
          createNotification('success', 'Post deleted successfully');
        }
      });
    } else if (
      e.target.id === 'update-post' ||
      e.target.classList.contains('fa-pencil')
    ) {
      const elem = e.target.closest('.card');
      getOldPostData(elem); // suitable without request

      // PostApi.getPostById(id).then((data) => {
      // createUpdatePost(elem, data)
      // });
    } else return;
  });
};

export default postHandler;
