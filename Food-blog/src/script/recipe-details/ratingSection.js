import createRatingStars from '../utils/rating-star.js';

const addRatingSection = (reviewCount, rating, selector = '.recipe') => {
  const wrapper = document.querySelector(selector);
  if ((wrapper, reviewCount)) {
    const ratingSection = document.createElement('div');
    ratingSection.classList.add('recipe_rating', 'mt-4');
    ratingSection.innerHTML = `
    <p><strong>Rating:</strong> ${rating} (${reviewCount} reviews)</p>
    <h4 class='card-body'>Rating</h4>
    `;

    wrapper.append(ratingSection);
    createRatingStars('.recipe_rating', rating);
  }
};

export default addRatingSection;
