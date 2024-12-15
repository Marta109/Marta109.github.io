const createRatingStars = (selector, rating, maxRating = 5) => {
  const stars = document.createElement('div');
  stars.classList.add('stars');
  let starItem = '';

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      starItem += '<i class="fa-solid fa-star"></i>';
    } else {
      starItem += '<i class="fa-regular fa-star"></i>';
    }
  }

  stars.innerHTML = starItem;
  const cardBody = document.querySelector(`${selector} .card-body`);

  if (cardBody) {
    cardBody.append(stars);
  }
};

export default createRatingStars;
