const displayBloggers = (paginateData, itemsPerPage, currentPage) => {
  if (!currentPage) {
    const paginationParEL = document.querySelector('.sidebar .pagination');
    const activePaginationItem = paginationParEL.querySelector('.active');
    currentPage = activePaginationItem.textContent;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = paginateData.slice(startIndex, endIndex);

  const mainContainer = document.querySelectorAll('.sidebar .container .card');
  mainContainer.forEach((parent, i) => {
    if (i < data.length && data[i]) {
      parent.classList.remove('hidden');
      const titleElem = parent.querySelector('.card-title');
      const authorElem = parent.querySelector('.card-descr');
      const emailElem = parent.querySelector('.card-descr.email');
      const imageElem = parent.querySelector('img');
      titleElem.textContent = `${data[i].firstName} ${data[i].lastName}`;
      authorElem.textContent = data[i].username;
      emailElem.textContent = data[i].email;
      imageElem.src =
        data[i].avatar ||
        'https://avatars.mds.yandex.net/i?id=a312755a937797721e28e1c2d119f010_l-5175041-images-thumbs&n=13';
    } else {
      parent.classList.add('hidden');
    }
  });
};

export default displayBloggers;
