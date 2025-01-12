const displayPosts = (paginateData, itemsPerPage, currentPage) => {
  if (!currentPage || typeof +currentPage === 'string') {
    const paginationParEL = document.querySelector('.section  .pagination');
    const activePaginationItem = paginationParEL.querySelector('.active');
    currentPage = activePaginationItem.textContent;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = paginateData.slice(startIndex, endIndex);

  const mainContainer = document.querySelectorAll('.section .box .card');
  mainContainer.forEach((parent, i) => {
    if (i < data.length && data[i]) {
      parent.classList.remove('hidden');
      parent.id = data[i].id;

      const titleElem = parent.querySelector('.card-title');
      const authorElem = parent.querySelector('.card-subtitle');
      const storyEl = parent.querySelector('.card-text');
      const imageElem = parent.querySelector('img');
      titleElem.textContent = data[i].title;
      authorElem.textContent = data[i].authorName;
      storyEl.textContent = data[i].story;
      imageElem.src =
        data[i].img ||
        'https://avatars.mds.yandex.net/i?id=fd4b4a75e1b4e1dfe14d093e317abe7e73e0040a-8406302-images-thumbs&n=13';
    } else {
      parent.classList.add('hidden');
    }
  });
};

export default displayPosts;
