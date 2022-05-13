import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drinks: any[] = [];

  constructor(private service: AppService) {
    this.service.getCocktailsByName('margarita')
      .then((response) => {
        if (response.data?.drinks?.length) {
          this.drinks = response.data.drinks;
          console.log(this.drinks);
        }
      })
      .catch((error) => console.error(error));
  }
}
