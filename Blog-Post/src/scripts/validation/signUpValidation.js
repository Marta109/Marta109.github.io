import ValidationError from './validationError.js';

const signUpValidation = (
  lastName,
  firstName,
  birthdayDate,
  gender,
  email,
  city,
  password,
  username,
) => {
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

  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    throw new ValidationError(
      'Invalid first or last name. Name can only contain letters',
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ValidationError(
      'Invalid email. Please enter a valid email address',
    );
  }

  if (birthdayDate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdayDate);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age <= 17 || age >= 110) {
      throw new ValidationError(
        'Invalid birthday date. Age must be between 18 and 109',
      );
    }
  }

  if (!city || city === 'city') {
    throw new ValidationError('City is required');
  }

  return true;
};

export default signUpValidation;
