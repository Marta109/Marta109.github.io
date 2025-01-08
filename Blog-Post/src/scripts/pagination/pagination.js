import displayList from './displayList.js';
import displayPagination from './displayPagination.js';

const pagination = (data) => {
  let itemsPerPage = 10;
  let bool = false;

  if (!bool) {
    setTimeout(() => {
      const width = window.innerWidth;
      if (width <= 668) {
        itemsPerPage = 5;
        displayList(data, itemsPerPage, 1);
      }
      displayPagination(data, itemsPerPage);
      bool = true;
    }, 1000);
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    console.log(width);
    if (width <= 668) {
      itemsPerPage = 5;
      displayList(data, itemsPerPage);
    } else {
      itemsPerPage = 10;
    }
    displayPagination(data, itemsPerPage);
  });

  // const width = window.innerWidth;
  // if (width <= 668) {
  //   itemsPerPage = 5;
  //   setTimeout(() => {
  //     console.log('first');
  //     displayPagination(data, itemsPerPage);
  //     // displayList(data, itemsPerPage);
  //   }, 1000);
  //   return;
  // } else {
  //   itemsPerPage = 10;
  // }

  // setTimeout(() => {
  //   console.log('second');
  //   displayPagination(data, itemsPerPage);
  // }, 1000);
};

export default pagination;
