import Storage from '../../../data/storage.js';
import RedirectHandler from '../redirection/redirectHandler.js';
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
    Storage.clearUserData();
  });
};

const createPostHandler = () => {
  const createBtn = document.querySelector('#createNewPost');
  if (!createBtn) return;

  createBtn.addEventListener('click', () => {
    RedirectHandler.redirectToCretePost()
  });
};

export { toggleThem, logOutHandler, createPostHandler };
