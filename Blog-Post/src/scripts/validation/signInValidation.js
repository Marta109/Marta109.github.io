import ValidationError from './validationError.js';

const signInValidation = (username, password) => {
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    throw new ValidationError(
      'Invalid username. Username can only contain letters and numbers',
    );
  }

  if (password.length < 3 || password.length > 10) {
    throw new ValidationError(
      'Invalid password. Password must be between 3 and 10 characters long',
    );
  }

  const hasAtLeastOneSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (!hasAtLeastOneSpecialCharacter) {
    throw new ValidationError(
      'Invalid password. Password must contain at least one special character',
    );
  }

  return true;
};

export default signInValidation;
