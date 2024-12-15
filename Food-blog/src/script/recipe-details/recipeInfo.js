const addRecipeInfo = (data) => {
  if (data) {
    const recipeInfo = document.createElement('div');
    recipeInfo.classList.add('recipe_info', 'mt-4');
    recipeInfo.innerHTML = `
    <h4>Recipe Information</h4>
    <p><strong>Preparation Time:</strong> ${data.prepTimeMinutes} minutes</p>
    <p><strong>Cooking Time:</strong> ${data.cookTimeMinutes} minutes</p>
    <p><strong>Servings:</strong> ${data.servings}</p>
    <p><strong>Difficulty:</strong> ${data.difficulty}</p>
    <p><strong>Cuisine:</strong> ${data.cuisine}</p>
    <p><strong>Calories Per Serving:</strong> ${data.caloriesPerServing}</p>
  `;
    return recipeInfo;
  }
};

export default addRecipeInfo;
