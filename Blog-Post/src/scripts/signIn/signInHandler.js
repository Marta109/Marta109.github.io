import Storage from '../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import signInValidation from '../validation/signInValidation.js';

const loginForm = document.querySelector('.login-container form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');

  const user = {
    username: username,
    name: 'Jon',
    surName: 'Smith',
    email: 'j@example.com',
    loggedIn: true,
    lastLoggedIn: new Date(),
  };

  try {
    signInValidation(username, password);
    Storage.setUserData(user);
    createNotification('success', 'Sing In successful! Welcome back.');
    setTimeout(() => {
      window.location.href = '/Blog-Post/src/pages/home.html';
    }, 3000);
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
});
