import { createNotification } from "../notification/createNotification.js";
const toggleThem = () => {
  const toggleBtn = document.querySelector('.toggle-theme');
  const themeIcon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeIcon.classList =
      themeIcon.classList[1] === 'fa-sun' ? 'fas fa-moon' : 'fas fa-sun';
  });
};

const logOutHandler = () => {
  const loginBtn = document.querySelector('#log-out');
  if (!loginBtn) return;

  loginBtn.addEventListener('click', () => {
    sessionStorage.removeItem('user');
    if (window.location.href.includes('createPost')) {
      createNotification(
        'info',
        'You have successfully logged out and will be redirected to the login page.',
      );
      setTimeout(() => {
        window.location.href = '../../index.html';
      }, 2000);
    } else {
      location.reload();
    }
  });
};

const createPostHandler = () => {
  const createBtn = document.querySelector('#createNewPost');
  if (!createBtn) return;

  createBtn.addEventListener('click', () => {
    window.location.href = './createPost.html';
  });
};

export { toggleThem, logOutHandler, createPostHandler };
