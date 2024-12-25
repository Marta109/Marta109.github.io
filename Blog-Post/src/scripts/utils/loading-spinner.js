const showSpinner = () => {
  const spinner = document.querySelector('#loading-spinner');
  if (spinner) {
    spinner.classList.remove('spinner-none');
  }
  document.body.style.pointerEvents = 'none';
};
const hideSpinner = () => {
  const spinner = document.querySelector('#loading-spinner');
  if (spinner) {
    spinner.classList.add('spinner-none');
  }
  document.body.style.pointerEvents = 'all';
};
export { showSpinner, hideSpinner };
