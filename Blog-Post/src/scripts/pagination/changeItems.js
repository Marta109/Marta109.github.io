const changeItems = (paginationParEL, direction, itemCount, active) => {
  const items = paginationParEL.querySelectorAll('li');
  const value = direction === '>>' ? +1 : -1;

  let end = items.length - 1;
  // console.log('itemCount=', itemCount);

  items.forEach((el, i) => {
    if (i > 0 && i < end) {
      el.textContent = +el.textContent + value;
      if (el.textContent === active) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
    if (+items[1].textContent === 1) {
      items[0].classList.add('disabled');
    } else {
      items[0].classList.remove('disabled');
    }
    if (+items[end - 1].textContent === itemCount) {
      items[end].classList.add('disabled');
    } else {
      items[end].classList.remove('disabled');
    }
  });
  // console.log('end=', items[end - 1].textContent);
};

export default changeItems;
