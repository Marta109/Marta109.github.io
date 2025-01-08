import FileUploadApi from '../../../../data/fileUploadApi.js';
// import checkUser from '../checkUser.js';

const getImgUrl = async (file) => {
  try {
    // const token = checkUser();
    const data = await FileUploadApi.upload(file);
    return data.url;
  } catch (error) {
    throw new Error('Error loading image!');
  }
};

export default getImgUrl;
