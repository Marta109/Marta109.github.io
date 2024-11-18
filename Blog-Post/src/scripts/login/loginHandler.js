import { createNotification } from '../notification/createNotification.js';

const loginForm = document.querySelector('.login-container form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  // const password = formData.get('password');

  const user={
    username: username,
    name: 'Jon',
    surName:'Smith',
    email: 'j@example.com',
    loggedIn: true,
    lastLoggedIn: new Date()
  }

  sessionStorage.setItem('user', JSON.stringify(user));

  createNotification('success', 'Login successful! Welcome back.');

  setTimeout(() => {
    window.location.href = '/Blog-Post/src/pages/home.html';
  }, 3000);
});
