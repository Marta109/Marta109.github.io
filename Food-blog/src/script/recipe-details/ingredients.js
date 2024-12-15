const addIngredients = (ingredients) => {
  if (ingredients && ingredients.length > 0) {
    const ingredientsWrapper = document.createElement('div');
    ingredientsWrapper.classList.add('recipe_ingredients', 'mt-4');
    ingredientsWrapper.innerHTML = '<h4>Ingredients for a delicacy</h4>';
    const ingredientsList = document.createElement('ol');
    ingredientsList.classList.add('list-group', 'list-group-numbered');

    ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });

    ingredientsWrapper.appendChild(ingredientsList);
    return ingredientsWrapper;
  }
};

export default addIngredients;
