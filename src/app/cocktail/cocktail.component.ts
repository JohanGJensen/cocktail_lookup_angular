import { Component, Input, OnInit } from '@angular/core';
import { ICocktail, Ingredient } from './cocktail.interface';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail!: ICocktail;

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    const cocktail = this.cocktail as any;

    if (!cocktail) return;

    let index: number = 1;
    cocktail[`strIngredient${index}`];

    while (typeof cocktail[`strIngredient${index}`] === 'string') {
      this.ingredients.push({
        ingredient: cocktail[`strIngredient${index}`] || '',
        amount: cocktail[`strMeasure${index}`] || ''
      });

      index++;
    }
  }
}
