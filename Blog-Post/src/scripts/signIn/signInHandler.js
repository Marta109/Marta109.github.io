import AuthApi from '../../../data/authApi.js';
import Storage from '../../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import RedirectHandler from '../redirection/redirectHandler.js';
import ValidationSignInSignUP from '../validation/signIn_signUp.js';

const loginForm = document.querySelector('.login-container form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');

  const user = {
    email,
    password,
  };

  try {
    ValidationSignInSignUP.signInValidation(email, password);
    AuthApi.loginUser(user).then((data) => {
      Storage.setAccessToken(data.accessToken);
      Storage.setUserData(data.user);
      RedirectHandler.signInHandler();
    });
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
});
