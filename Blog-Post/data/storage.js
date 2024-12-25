import RedirectHandler from '../src/scripts/redirection/redirectHandler.js';

class Storage {
  static clearUserData(itemName = 'access') {
    try {
      sessionStorage.removeItem(itemName);
      RedirectHandler.logoutHandler();
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  }

  static hasUser(itemName = 'access') {
    return !!sessionStorage.getItem(itemName);
  }

  static getUserData(itemName = 'access') {
    if (!this.hasUser(itemName)) return null;
    return JSON.parse(sessionStorage.getItem(itemName));
  }

  static setUserData(data, itemName = 'access') {
    sessionStorage.setItem(itemName, JSON.stringify(data));
  }

  // static getNewPosts(itemName = 'newPost') {
  //   const posts = sessionStorage.getItem('newPost');
  //   return posts ? JSON.parse(posts) : [];
  // }

  // static setNewPost(newPost, itemName = 'newPost') {
  //   let oldPosts = sessionStorage.getItem(itemName);

  //   oldPosts = oldPosts ? JSON.parse(oldPosts) : [];
  //   oldPosts.push(newPost);
  //   sessionStorage.setItem(itemName, JSON.stringify(oldPosts));
  // }
}

export default Storage;
