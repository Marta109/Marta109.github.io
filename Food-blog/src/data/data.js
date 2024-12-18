import { hideSpinner, showSpinner } from '../script/utils/loading-spinner.js';

class RecipeApi {
  static baseUrl = 'https://dummyjson.com';
  static recipePath = 'recipes';
  static quotePath = 'quotes';
  static randomPath = 'random';

  static async getAllRecipe() {
    showSpinner();
    try {
      const response = await fetch(`${this.baseUrl}/${this.recipePath}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      hideSpinner();
      return data.recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  static async getRecipeById(id) {
    showSpinner();
    try {
      const response = await fetch(`${this.baseUrl}/${this.recipePath}/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      hideSpinner();
      return data;
    } catch (error) {
      console.error(`Error fetching recipe with id ${id}:`, error);
    }
  }

  static async getRandomQuote() {
    showSpinner();
    try {
      const url = `${this.baseUrl}/${this.quotePath}/${this.randomPath}`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      hideSpinner();
      return { ...data, url };
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  }
}

export default RecipeApi;
