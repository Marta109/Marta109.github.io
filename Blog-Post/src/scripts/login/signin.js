const loginForm = document.querySelector('.login-container form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = '/Blog-Post/src/pages/home.html';
});
