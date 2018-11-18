import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from "../model/recipe";
import {Observable, of} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  productList: Array<Product> = [];

  constructor(private http: HttpClient) {  }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  public getRecipesListByUserList(userProdArray) {
    userProdArray.forEach((value, index) => {
      console.log(userProdArray[index].name, userProdArray[index].amount);
    });
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }






}
