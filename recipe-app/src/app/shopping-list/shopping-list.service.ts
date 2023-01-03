import { EventEmitter, Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potato', 10),
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number) {
    this.ingredients.push({ name: name, amount: amount });
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredinents(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
