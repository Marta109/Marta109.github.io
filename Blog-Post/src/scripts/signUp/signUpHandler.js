import AuthApi from '../../../data/authApi.js';
import Storage from '../../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import RedirectHandler from '../redirection/redirectHandler.js';
import ValidationSignInSignUP from '../validation/signIn_signUp.js';

const registrationForm = document.querySelector('.registration-form form');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(registrationForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const birthdayDate = formData.get('birthdayDate');
  const gender = formData.get('inlineRadioOptions');
  const email = formData.get('email');
  const city = formData.get('city');
  const password = formData.get('password');
  const username = formData.get('username');

  const user = {
    firstName,
    lastName,
    email,
    username,
    password,
  };

  try {
    ValidationSignInSignUP.signUpValidation(
      firstName,
      lastName,
      email,
      username,
      password,
      // birthdayDate,
      // gender,
      // city,
    );

    AuthApi.registerUser(user)
      .then((data) => {
        if (data) {
          return AuthApi.loginUser({ email, password });
        }
      })
      .then((data) => {
        if (data) {
          Storage.setUserData(data.accessToken);
          RedirectHandler.signUpHandler();
        }
      });
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
});
