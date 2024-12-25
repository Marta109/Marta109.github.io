import { createNotification } from '../src/scripts/notification/createNotification.js';
import {
  hideSpinner,
  showSpinner,
} from '../src/scripts/utils/loading-spinner.js';
import ApiPaths from './apiPaths.js';

class PostApi {
  static async getAllPosts() {
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts),
      );

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

  static async getPostById(id) {
    if (!id) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
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

  static async createPost(postData) {
    if (!postData) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
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

  static async updatePost(id, postData) {
    if (!id || !postData) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      createNotification('error', error);
      console.error('Error updating post:', error);
    } finally {
      hideSpinner();
    }
  }

  static async deletePost(id) {
    if (!id) return;
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.posts, id),
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
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
