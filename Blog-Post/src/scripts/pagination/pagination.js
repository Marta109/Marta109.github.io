import displayList from './displayList.js';
import displayPagination from './displayPagination.js';

const pagination = (data, place = 'bloggers') => {
  let itemsPerPage = 10;
  let bool = false;

  if (!bool) {
    setTimeout(() => {
      const width = window.innerWidth;
      if (width <= 668) {
        itemsPerPage = 5;
        displayList(data, itemsPerPage, 1, place);
      }
      displayPagination(data, itemsPerPage, place);
      bool = true;
    }, 1000);
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width <= 668) {
      if (itemsPerPage === 5) return;
      itemsPerPage = 5;
      displayList(data, itemsPerPage, null, place);
    } else {
      if (itemsPerPage === 10) return;
      itemsPerPage = 10;
    }
    displayPagination(data, itemsPerPage, place);
  });
};

export default pagination;
