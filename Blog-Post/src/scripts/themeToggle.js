const toggleThem = () => {
  const toggleBtn = document.querySelector('.toggle-theme');
  const themeIcon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeIcon.classList =
      themeIcon.classList[1] === 'fa-sun' ? 'fas fa-moon' : 'fas fa-sun';
  });
};

export default toggleThem;
