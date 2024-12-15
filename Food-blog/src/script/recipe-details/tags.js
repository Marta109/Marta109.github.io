const addTags = (tags) => {
  if (tags && tags.length > 0) {
    const recipeTags = document.createElement('div');
    recipeTags.classList.add('recipe_tags', 'mt-4');
    recipeTags.innerHTML = '<h4>Tags</h4>';
    const tagsList = document.createElement('ul');
    tagsList.classList.add('list-group');

    tags.forEach((tag) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = tag;
      tagsList.appendChild(li);
    });

    recipeTags.appendChild(tagsList);
    return recipeTags;
  }
};

export default addTags;
