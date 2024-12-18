import { hideSpinner, showSpinner } from '../script/utils/loading-spinner.js';

const getRandomQuoteByXML = (callback) => {
  showSpinner();
  const baseUrl = 'https://dummyjson.com';
  const quotePath = 'quotes';
  const randomPath = 'random';

  const request = new XMLHttpRequest();
  const url = `${baseUrl}/${quotePath}/${randomPath}`;
  request.open('GET', url);
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      hideSpinner();
      const data = JSON.parse(request.response);
      callback({ ...data, url });
    }
  });
};

export default getRandomQuoteByXML;
