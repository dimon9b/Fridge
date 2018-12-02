import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../model/user";
import {Recipe} from "../model/recipe";
import {Product} from "../model/product";

@Pipe({
  name: 'filterRecipes',
  pure: false
})
export class FilterRecipesPipe implements PipeTransform {

  transform(filter: Array<Product>, items: Array<Product>): any {
    console.log(items);
    console.log(filter);
    if (!items || !filter) {
      return items;
    }

    items.forEach(item => {
      const productFound = filter.find(product => item.name === product.name);
      if (!productFound) {
        console.log('not passed');
        return null;
      }
    });
    console.log('passed');
    return items;
    // filter items array, items which match and return true will be
    // kept, false will be filtered out

    // return items.filter(item => item.name.indexOf(filter.name) !== -1);
  }
}
