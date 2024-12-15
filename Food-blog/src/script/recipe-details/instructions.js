const addInstructions = (instructions) => {
  if (instructions && instructions.length > 0) {
    const cookingInstructions = document.createElement('div');
    cookingInstructions.classList.add('cooking_instructions', 'mt-4');
    cookingInstructions.innerHTML = '<h4>How to prepare this recipe</h4>';

    const instructionsList = document.createElement('ol');
    instructionsList.classList.add('list-group', 'list-group-numbered');
    instructions.forEach((instruction) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = instruction;
      instructionsList.appendChild(li);
    });

    cookingInstructions.appendChild(instructionsList);
    return cookingInstructions;
  }
};

export default addInstructions;
