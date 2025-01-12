const displayPaginationItems = (itemCount, paginationParEL) => {
  let items = itemCount > 10 ? 10 : itemCount;
  if (itemCount > 10) {
    const firstItem = document.createElement('li');
    firstItem.classList.add('pagination-item', 'disabled');
    firstItem.textContent = '<<';
    paginationParEL.appendChild(firstItem);
  }

  for (let i = 0; i < items; i++) {
    const paginationItem = document.createElement('li');
    paginationItem.classList.add('pagination-item');
    if (i === 0) {
      paginationItem.classList.add('active');
    }
    paginationItem.textContent = i + 1;
    paginationParEL.appendChild(paginationItem);
  }

  if (itemCount > 10) {
    const lastItem = document.createElement('li');
    lastItem.classList.add('pagination-item');
    lastItem.textContent = '>>';
    paginationParEL.appendChild(lastItem);
  }
};

export default displayPaginationItems;
