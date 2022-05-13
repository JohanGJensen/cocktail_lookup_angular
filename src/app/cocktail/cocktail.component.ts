import { Component, Input, OnInit } from '@angular/core';
import { ICocktail, Ingredient } from './cocktail.interface';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail: ICocktail | any;

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    if (!this.cocktail) return;

    let index: number = 1;
    this.cocktail[`strIngredient${index}`];

    while (typeof this.cocktail[`strIngredient${index}`] === 'string') {
      this.ingredients.push({
        ingredient: this.cocktail[`strIngredient${index}`] || '',
        amount: this.cocktail[`strMeasure${index}`] || ''
      });

      index++;
    }
  }
}
