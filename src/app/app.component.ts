import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ICocktail } from './cocktail/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drinks: ICocktail[] = [];
  search: string = '';

  constructor(private service: AppService) {
    this.service.getCocktailsByName('margarita')
      .then((response) => {
        if (response.data?.drinks?.length) {
          this.drinks = response.data.drinks;
        }
      })
      .catch((error) => console.error(error));
  }

  onSearch(value: string) {
    // set search value as event happens
    this.search = value;

    // debounce search value to avoid fetching data on every change event.
    this.debounce(this.searchCocktails, 3000)(value);
  }

  debounce(fn: Function, time: number) {
    let bouncing: boolean;

    return (...args: any) => {
      if (!bouncing) {
        bouncing = true;

        setTimeout(() => {
          bouncing = false;
          fn.apply(this, args);
        }, time);
      }
    }
  }

  searchCocktails(value: string) {
    if (value === this.search) {
      console.log('test', value, this.search);
    }
  }
}
