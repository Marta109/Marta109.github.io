import ValidationError from './validationError.js';

class ValidationUpdatePost {
  static validateOldData(data) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (value === null || value.trim() === '') {
          throw new ValidationError(`Missing or empty value for field: ${key}`);
        }
      }
    }
  }

  static isParentElem(parentElem) {
    if (!parentElem || !(parentElem instanceof Element)) {
      throw new ValidationError('Parent element not found');
    }
  }

  static validateNewData(newPostData) {
    for (const key in newPostData) {
      if (Object.prototype.hasOwnProperty.call(newPostData, key)) {
        const value = newPostData[key];
        if (value === null || value.trim() === '') {
          throw new ValidationError(`Missing or empty value for field: ${key}`);
        }
      }
    }
  }
}

export default ValidationUpdatePost;
