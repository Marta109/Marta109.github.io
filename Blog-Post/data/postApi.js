import { createNotification } from '../src/scripts/notification/createNotification.js';
import checkUser from '../src/scripts/utils/checkUser.js';
import {
  hideSpinner,
  showSpinner,
} from '../src/scripts/utils/loading-spinner.js';
import ApiPaths from './apiPaths.js';

class PostApi {
  static async getAllPosts() {
    try {
      showSpinner();
      const response = await fetch(ApiPaths.getFullPath(ApiPaths.paths.posts));

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return await response.json();
    } catch (error) {
      createNotification('error', error);
      console.error('Error fetching posts:', error);
    } finally {
      hideSpinner();
    }
  }

  static async getPostById(id, token) {
    if (!id || !token) return;

    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      return await response.json();
    } catch (error) {
      createNotification('error', error);
      console.error('Error fetching post:', error);
    } finally {
      hideSpinner();
    }
  }

  static async createPost(postData, token) {
    if (!postData || !token) return;
    try {
      showSpinner();
      const response = await fetch(ApiPaths.getFullPath(ApiPaths.paths.posts), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 401) {
          checkUser(true);
          return 'false';
        }

        throw new Error(errorData.message);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      createNotification('error', error);
      console.error('Error creating post:', error);
    } finally {
      hideSpinner();
    }
  }

  static async updatePost(id, postData, token) {
    if (!id || !postData || !token) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 401) {
          checkUser(true);
          return 'false';
        }

        throw new Error(errorData.message || 'Error updating post');
      }
    } catch (error) {
      createNotification('error', error);
      console.error('Error updating post:', error);
    } finally {
      hideSpinner();
    }
  }

  static async deletePost(id, token) {
    if (!id || !token) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 401) {
          checkUser(true);
          return 'false';
        }
        throw new Error(errorData.message);
      }
    } catch (error) {
      createNotification('error', error);
      console.error('Error deleting post:', error);
    } finally {
      hideSpinner();
    }
  }
}

export default PostApi;
