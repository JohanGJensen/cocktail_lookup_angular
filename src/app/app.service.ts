import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiKey: string = '1';

  constructor() { }

  getCocktailsByName(name: string) {
    return axios.get(`https://thecocktaildb.com/api/json/v1/${this.apiKey}/search.php?s=${name}`);
  }
}
