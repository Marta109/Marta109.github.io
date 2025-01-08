export const createNotification = (
  type,
  message,
  selector = '.container-root',
) => {
  const notificationWrapper = document.createElement('div');
  notificationWrapper.className = `notification ${type}`;

  const icon = document.createElement('span');
  icon.className = 'notification-icon';
  if (type === 'success') {
    icon.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  } else if (type === 'error') {
    icon.innerHTML = '<i class="fa-solid fa-times-circle"></i>';
  } else if (type === 'info') {
    icon.innerHTML = '<i class="fa-solid fa-info-circle"></i>';
  } else if (type === 'warning') {
    icon.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i>';
  }

  const messageElement = document.createElement('p');
  messageElement.className = 'notification-message';
  messageElement.textContent = message;

  notificationWrapper.appendChild(icon);
  notificationWrapper.appendChild(messageElement);

  const parentElement = document.querySelector(selector);
  if (parentElement) {
    parentElement.appendChild(notificationWrapper);
  }
  
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // });

  setTimeout(() => {
    notificationWrapper.classList.add('show');
  });

  setTimeout(() => {
    notificationWrapper.classList.remove('show');
  }, 3000);
};
