import { createNotification } from '../src/scripts/notification/createNotification.js';
import {
  hideSpinner,
  showSpinner,
} from '../src/scripts/utils/loading-spinner.js';
import ApiPaths from './apiPaths.js';

class AuthApi {
  static async loginUser(data) {
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.auth.login),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return await response.json();
    } catch (error) {
      createNotification('error', error);
      console.error('login', error);
    } finally {
      hideSpinner();
    }
  }

  static async registerUser(data) {
    try {
      showSpinner();
      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.auth.register),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return await response.json();
    } catch (error) {
      createNotification('error', error);
      console.error('register', error);
    } finally {
      hideSpinner();
    }
  }
}

export default AuthApi;
