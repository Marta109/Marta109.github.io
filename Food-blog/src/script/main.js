import Data from '../data/data.js';
import createRatingStars from './utils/rating-star.js';

const createMenuItems = (selector = '#recipes-wrapper .row') => {
  const container = document.querySelector(selector);

  Data.getAllRecipe().then((data) => {
    data.forEach((recipe) => {
      const card = document.createElement('div');
      card.classList.add('card-container');
      card.innerHTML = `
      <div class="card menu_card" id=_${recipe.id}>
        <div class="card_img_container">
          <img
            src="${recipe.image}"
            class="card-img-top recipe_img"
            alt="${recipe.name}"
          />
        </div>
        <div class="card-body">
          <h3 class="card-title">${recipe.name}</h3>
          <h4 class="card-descr"> Difficulty:  ${recipe.difficulty}</h4>
          <h4 class="card-descr"> Meal Type: ${recipe.mealType}</h4>
          <h4 class="card-descr"> Cuisine:  ${recipe.cuisine}</h4>
          <h4 class="card-descr"> Calories Per Serving:  ${recipe.caloriesPerServing}</h4>
          <h4 class="card-descr"> Cook Time (Minutes):  ${recipe.cookTimeMinutes}</h4>
          <h4 class="card-descr"> Rating:  ${recipe.rating}</h4>
        </div>
      </div>
      `;

      container.appendChild(card);
      createRatingStars(`#_${recipe.id}`, recipe.rating);
    });
  });
};

createMenuItems();

const menuWrapper = document.querySelector('#recipes-wrapper');

menuWrapper.addEventListener('click', (e) => {
  if (
    !e.target.classList.contains('card-container') &&
    !e.target.classList.contains('row')
  ) {
    const card = e.target.closest('.card.menu_card');

    if (card) {
      const url = './src/pages/recipe-details.html';
      const cardId = card.id.slice(1);
      const params = new URLSearchParams();

      params.append('id', cardId);
      const fullUrl = url + '?' + params.toString();

      window.location.href = fullUrl;
    }
  }
});
