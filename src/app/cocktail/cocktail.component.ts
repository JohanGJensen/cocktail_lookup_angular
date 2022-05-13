import { Component, Input, OnInit } from '@angular/core';
import { ICocktail, Ingredient } from './cocktail.interface';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail: ICocktail | undefined;

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getIngredients();
    console.log(this.ingredients);
  }

  getIngredients(): void {
    if (!this.cocktail) return;

    if (
      this.cocktail.strIngredient1 &&
      this.cocktail.strMeasure1
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient1, amount: this.cocktail.strMeasure1 });
    }
    if (
      this.cocktail.strIngredient2 &&
      this.cocktail.strMeasure2
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient2, amount: this.cocktail.strMeasure2 });
    }
    if (
      this.cocktail.strIngredient3 &&
      this.cocktail.strMeasure3
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient3, amount: this.cocktail.strMeasure3 });
    }
    if (
      this.cocktail.strIngredient4 &&
      this.cocktail.strMeasure4
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient4, amount: this.cocktail.strMeasure4 });
    }
    if (
      this.cocktail.strIngredient5 &&
      this.cocktail.strMeasure5
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient5, amount: this.cocktail.strMeasure5 });
    }
    if (
      this.cocktail.strIngredient6 &&
      this.cocktail.strMeasure6
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient6, amount: this.cocktail.strMeasure6 });
    }
    if (
      this.cocktail.strIngredient7 &&
      this.cocktail.strMeasure7
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient7, amount: this.cocktail.strMeasure7 });
    }
    if (
      this.cocktail.strIngredient8 &&
      this.cocktail.strMeasure8
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient8, amount: this.cocktail.strMeasure8 });
    }
    if (
      this.cocktail.strIngredient9 &&
      this.cocktail.strMeasure9
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient9, amount: this.cocktail.strMeasure9 });
    }
    if (
      this.cocktail.strIngredient10 &&
      this.cocktail.strMeasure10
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient10, amount: this.cocktail.strMeasure10 });
    }
    if (
      this.cocktail.strIngredient11 &&
      this.cocktail.strMeasure11
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient11, amount: this.cocktail.strMeasure11 });
    }
    if (
      this.cocktail.strIngredient12 &&
      this.cocktail.strMeasure12
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient12, amount: this.cocktail.strMeasure12 });
    } if (
      this.cocktail.strIngredient13 &&
      this.cocktail.strMeasure13
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient13, amount: this.cocktail.strMeasure13 });
    }
    if (
      this.cocktail.strIngredient14 &&
      this.cocktail.strMeasure14
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient14, amount: this.cocktail.strMeasure14 });
    }
    if (
      this.cocktail.strIngredient15 &&
      this.cocktail.strMeasure15
    ) {
      this.ingredients.push({ ingredient: this.cocktail.strIngredient15, amount: this.cocktail.strMeasure15 });
    }
  }
}
