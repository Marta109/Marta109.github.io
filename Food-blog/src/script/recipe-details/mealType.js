const addMealType = (mealType) => {
  if (mealType && mealType.length > 0) {
    const mealTypeSection = document.createElement('div');
    mealTypeSection.classList.add('recipe_meal_type', 'mt-4');
    mealTypeSection.innerHTML = `
          <h4>Meal Type</h4>
          <ul class="list-group">
            ${mealType.map((meal) => `<li class="list-group-item">${meal}</li>`).join('')}
          </ul>
        `;

    return mealTypeSection;
  }
};

export default addMealType;
