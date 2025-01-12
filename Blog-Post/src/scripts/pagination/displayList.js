import displayBloggers from './sections/displayBloggers.js';
import displayPosts from './sections/displayPosts.js';

const displayList = (paginateData, itemsPerPage, currentPage, place) => {
  if (!paginateData) return;

  if (place === 'bloggers') {
    displayBloggers(paginateData, itemsPerPage, currentPage);
  } else {
    displayPosts(paginateData, itemsPerPage, currentPage);
  }
};

export default displayList;
