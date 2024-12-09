import { createNotification } from '../scripts/notification/createNotification.js';

class Storage {
  constructor() {}

  static clearUserData(itemName = 'user') {
    try {
      sessionStorage.removeItem(itemName);
      if (window.location.href.includes('createPost')) {
        createNotification(
          'info',
          'You have successfully logged out and will be redirected to the login page.',
        );
        setTimeout(() => {
          // window.location.href = '../../index.html';
          window.location.replace('../../index.html');
        }, 2000);
      } else {
        location.reload();
      }
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  }

  static hasUser(itemName = 'user') {
    return !!sessionStorage.getItem(itemName);
  }

  static getUserData(itemName = 'user') {
    if (!this.hasUser(itemName)) return null;
    return JSON.parse(sessionStorage.getItem(itemName));
  }

  static setUserData(data, itemName = 'user') {
    sessionStorage.setItem(itemName, JSON.stringify(data));
  }

  static getNewPosts(itemName = 'newPost') {
    const posts = sessionStorage.getItem('newPost');
    return posts ? JSON.parse(posts) : [];
  }

  static setNewPost(newPost, itemName = 'newPost') {
    let oldPosts = sessionStorage.getItem(itemName);

    oldPosts = oldPosts ? JSON.parse(oldPosts) : [];
    oldPosts.push(newPost);
    sessionStorage.setItem(itemName, JSON.stringify(oldPosts));
  }
}

export default Storage;
