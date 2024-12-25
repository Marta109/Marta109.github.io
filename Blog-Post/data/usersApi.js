import { createNotification } from '../src/scripts/notification/createNotification.js';
import {
  hideSpinner,
  showSpinner,
} from '../src/scripts/utils/loading-spinner.js';
import ApiPaths from './apiPaths.js';

class UsersApi {
  static async getAllUsers() {
    try {
      //   showSpinner();
      const response = await fetch(ApiPaths.getFullPath(ApiPaths.paths.users));
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return await response.json();
    } catch (error) {
      createNotification('error', error);
      console.error('login', error);
    } finally {
      //   hideSpinner();
    }
  }
}

export default UsersApi;
