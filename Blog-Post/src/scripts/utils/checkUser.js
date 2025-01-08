import Storage from '../../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import RedirectHandler from '../redirection/redirectHandler.js';

const checkUser = (bool = false) => {
  const token = Storage.getAccessToken();

  if (bool || !token) {
    Storage.clearUserData();
    createNotification('error', 'Please log in to access this functionality.');
    setTimeout(() => {
      RedirectHandler.redirectToLogin();
    }, 4000);
    return false;
  }

  return token;
};

export default checkUser;
