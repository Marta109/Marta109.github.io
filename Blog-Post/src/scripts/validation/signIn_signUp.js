import ValidationError from './validationError.js';

class ValidationSignInSignUP {
  static validateUsername(username) {
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      throw new ValidationError(
        'Invalid username. Username can only contain letters and numbers',
      );
    }
  }

  static validatePassword(password) {
    if (password.length < 6) {
      throw new ValidationError(
        'Invalid password. Password should be at least 6 characters.',
      );
    }

    const hasAtLeastOneSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(
      password,
    );
    if (!hasAtLeastOneSpecialCharacter) {
      throw new ValidationError(
        'Invalid password. Password must contain at least one special character',
      );
    }
  }

  static validateName(name, fieldName) {
    if (!/^[a-zA-Z]+$/.test(name)) {
      throw new ValidationError(
        `Invalid ${fieldName}. Name can only contain letters`,
      );
    }
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError(
        'Invalid email. Please enter a valid email address',
      );
    }
  }

  static validateBirthday(birthdayDate) {
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
  }

  static validateCity(city) {
    if (!city || city === 'city') {
      throw new ValidationError('City is required');
    }
  }

  static signUpValidation(
    firstName,
    lastName,
    email,
    username,
    password,
    // birthdayDate,
    // gender,
    // city,
  ) {
    this.validateName(firstName, 'first name');
    this.validateName(lastName, 'last name');
    this.validateEmail(email);
    this.validateUsername(username);
    this.validatePassword(password);
    // this.validateBirthday(birthdayDate);
    // this.validateCity(city);

    return true;
  }

  static signInValidation(email, password) {
    this.validateEmail(email);
    this.validatePassword(password);

    return true;
  }
}

export default ValidationSignInSignUP;
