import displayList from './displayList.js';

const displayPagination = (
  data,
  itemsPerPage,
  selector = '.sidebar .pagination',
) => {
  if (!data || data.length === 0) return;

  const paginationParEL = document.querySelector(selector);
  paginationParEL.innerHTML = '';

  const itemCount = Math.ceil((data.length - 1) / itemsPerPage);

  console.log(data.length);
  console.log(itemsPerPage);
  console.log(itemCount);

  for (let i = 0; i < itemCount; i++) {
    const paginationItem = document.createElement('li');
    paginationItem.classList.add('pagination-item');
    if (i === 0) {
      paginationItem.classList.add('active');
    }
    paginationItem.textContent = i + 1;
    paginationParEL.appendChild(paginationItem);
  }

  paginationParEL.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const activePaginationItem = paginationParEL.querySelector('.active');
      activePaginationItem.classList.remove('active');
      e.target.classList.add('active');
      const currentPage = parseInt(e.target.textContent);
      //   const startIndex = (currentPage - 1) * itemsPerPage;
      //   const endIndex = startIndex + itemsPerPage;
      //   const paginateData = data.slice(startIndex, endIndex);
      displayList(data, itemsPerPage, currentPage);
    }
  });
};

export default displayPagination;
