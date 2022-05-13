import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cocktail Lookup';

  constructor(private service: AppService) {
    this.service.getCocktailsByName('margarita')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }
}
