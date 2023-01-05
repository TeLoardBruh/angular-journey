import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Tasty Schnitzel super recipe',
      'https://i.ytimg.com/vi/zWUlxCYsw-4/maxresdefault.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Big Fat burger',
      'Super awesome recipe for burger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg',
      [new Ingredient('Onion', 2), new Ingredient('Egg', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredinents(ingredients);
  }
}
