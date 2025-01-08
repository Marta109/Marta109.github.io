import ApiPaths from './apiPaths.js';
import { createNotification } from '../src/scripts/notification/createNotification.js';
import {
  hideSpinner,
  showSpinner,
} from '../src/scripts/utils/loading-spinner.js';

class FileUploadApi {
  static async upload(file, token) {
    if (!file) return;
    try {
      showSpinner();
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(
        ApiPaths.getFullPath(ApiPaths.paths.fileUpload),
        {
          method: 'POST',
          body: formData,
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
        },
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
}

export default FileUploadApi;
