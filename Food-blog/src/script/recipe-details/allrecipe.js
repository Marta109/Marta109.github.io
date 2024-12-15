import Data from '../../data/data.js';
import addIngredients from './ingredients.js';
import addInstructions from './instructions.js';
import addMealType from './mealType.js';
import addRatingSection from './ratingSection.js';
import addRecipeInfo from './recipeInfo.js';
import addTags from './tags.js';

const params = new URLSearchParams(window.location.search);
const cardId = params.get('id');

Data.getRecipeById(cardId).then((data) => {
  console.log(data);
  const wrapper = document.querySelector('.recipe');

  const recipeTitle = document.createElement('h1');
  recipeTitle.classList.add('recipe_title', 'text-center');
  recipeTitle.textContent = data.name;

  const recipeImg = document.createElement('img');
  recipeImg.classList.add('recipe-details_img', 'img-fluid', 'rounded');
  recipeImg.src = data.image;
  recipeImg.alt = data.name;

  const recipeInfo = addRecipeInfo(data);
  const ingredients = addIngredients(data.ingredients);
  const instructions = addInstructions(data.instructions);
  const mealType = addMealType(data.mealType);
  const tags = addTags(data.tags);

  wrapper.append(
    recipeTitle,
    recipeImg,
    recipeInfo,
    ingredients,
    instructions,
    mealType,
    tags,
  );

  addRatingSection(data.reviewCount, data.rating);
});
