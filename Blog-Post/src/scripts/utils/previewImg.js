import { createNotification } from '../notification/createNotification.js';

const previewImg = () => {
  const currentImgElm = document.getElementById('currentImg');
  const previewImageWrapper = document.getElementById('previewImageWrapper');
  previewImageWrapper.classList.add('hidden');
  const fileInput = document.getElementById('fileUpload');

  const preview = document.getElementById('previewImage');

  fileInput.addEventListener('change', () => {
    if (currentImgElm) currentImgElm.classList.add('hidden');

    previewImageWrapper.classList.remove('hidden');
    const file = fileInput.files[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        createNotification(
          'error',
          'Only images are allowed. Please select an image file.',
        );
        previewImageWrapper.classList.add('hidden');
        if (currentImgElm) currentImgElm.classList.remove('hidden');
        return;
      }

      const reader = new FileReader();

      reader.onload = (event) => {
        preview.src = event.target.result;
        preview.style.display = 'block';
      };

      reader.readAsDataURL(file);
    } else {
      previewImageWrapper.classList.remove('hidden');
      preview.src = '';
    }
  });
};

export default previewImg;
