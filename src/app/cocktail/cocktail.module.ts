import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CocktailComponent } from './cocktail.component';

@NgModule({
  declarations: [
    CocktailComponent,
  ],
  imports: [
    MatCardModule,
  ],
  exports: [CocktailComponent],
})

export class CocktailModule { }
