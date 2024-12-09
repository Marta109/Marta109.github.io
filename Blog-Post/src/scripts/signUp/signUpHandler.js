import Storage from '../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import signUpValidation from '../validation/signUpValidation.js';

const registrationForm = document.querySelector('.registration-form form');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(registrationForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const birthdayDate = formData.get('birthdayDate');
  const gender = formData.get('inlineRadioOptions');
  const email = formData.get('email');
  const city = formData.get('city');
  const password = formData.get('password');
  const username = formData.get('username');

  const user = {
    username: username,
    name: firstName,
    surName: lastName,
    email: email,
    loggedIn: true,
    lastLoggedIn: new Date(),
  };

  try {
    signUpValidation(
      firstName,
      lastName,
      birthdayDate,
      gender,
      email,
      city,
      password,
      username,
    );

    Storage.setUserData(user);
    createNotification('success', 'Sing Up successful! Welcome!!!.');
    setTimeout(() => {
      window.location.href = '/Blog-Post/src/pages/home.html';
    }, 3000);
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
});
