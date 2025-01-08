import RedirectHandler from '../src/scripts/redirection/redirectHandler.js';

class Storage {
  static clearUserData(itemName = 'access') {
    try {
      localStorage.removeItem(itemName);
      RedirectHandler.logoutHandler();
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  }

  static hasUser(itemName = 'access') {
    return !!localStorage.getItem(itemName);
  }

  static getAccessToken(itemName = 'access') {
    if (!this.hasUser(itemName)) return null;
    return JSON.parse(localStorage.getItem(itemName));
  }

  static getUserId() {
    const userData = this.getUserData();
    return userData ? userData.id : null;
  }

  static setAccessToken(data, itemName = 'access') {
    localStorage.setItem(itemName, JSON.stringify(data));
  }

  static setUserData(data, itemName = 'user') {
    localStorage.setItem(itemName, JSON.stringify(data));
  }

  static getUserData(itemName = 'user') {
    if (!this.hasUser(itemName)) return null;
    return JSON.parse(localStorage.getItem(itemName));
  }

  // static getNewPosts(itemName = 'newPost') {
  //   const posts = localStorage.getItem('newPost');
  //   return posts ? JSON.parse(posts) : [];
  // }

  // static setNewPost(newPost, itemName = 'newPost') {
  //   let oldPosts = localStorage.getItem(itemName);

  //   oldPosts = oldPosts ? JSON.parse(oldPosts) : [];
  //   oldPosts.push(newPost);
  //   localStorage.setItem(itemName, JSON.stringify(oldPosts));
  // }
}

export default Storage;
