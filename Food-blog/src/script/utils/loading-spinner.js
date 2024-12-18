const showSpinner = () => {
  const spinner = document.querySelector('#loading-spinner');
  if (spinner) {
    spinner.style.display = 'block';
  }
  document.body.style.pointerEvents = 'none';
};

const hideSpinner = () => {
  const spinner = document.querySelector('#loading-spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
  document.body.style.pointerEvents = 'all';
};

export { showSpinner, hideSpinner };
