class Data {
  static baseUrl = 'https://dummyjson.com';
  static recipePath = 'recipes';

  static async getAllRecipe() {
    try {
      const response = await fetch(`${this.baseUrl}/${this.recipePath}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return data.recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  static async getRecipeById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.recipePath}/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return data;
    } catch (error) {
      console.error(`Error fetching recipe with id ${id}:`, error);
    }
  }
}

export default Data;
