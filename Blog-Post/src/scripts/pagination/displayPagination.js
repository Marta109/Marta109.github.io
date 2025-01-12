import changeItems from './changeItems.js';
import displayList from './displayList.js';
import displayPaginationItems from './displayPaginationItems.js';

const displayPagination = (data, itemsPerPage, place) => {
  if (!data || data.length === 0) return;

  let selector =
    place === 'bloggers' ? '.sidebar .pagination' : '.section  .pagination';

  const paginationParEL = document.querySelector(selector);
  if (!paginationParEL) return;
  paginationParEL.innerHTML = '';

  const itemCount = Math.ceil((data.length - 1) / itemsPerPage);

  displayPaginationItems(itemCount, paginationParEL);

  let active = '1';
  paginationParEL.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      if (e.target.textContent === '<<' || e.target.textContent === '>>') {
        changeItems(paginationParEL, e.target.textContent, itemCount, active);
        return;
      }
      const activePaginationItem = paginationParEL.querySelector('.active');
      if (activePaginationItem) {
        if (activePaginationItem === e.target) return;
        activePaginationItem.classList.remove('active');
      }
      e.target.classList.add('active');
      active = e.target.textContent;
      const currentPage = parseInt(e.target.textContent);
      displayList(data, itemsPerPage, currentPage, place);
    }
  });
};

export default displayPagination;
