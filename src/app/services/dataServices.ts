import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import {  products, newProducts } from '../mocks/produits-mocks';

@Injectable()
export class DataService {
  constructor() {
   }
   getAllProduct(): Product[]{
     return products;
   }
   getNewProducts(): Product[]{
    return newProducts;
  }
 /* getSpecialOffresProduct(): Product[]{
    return specialsOffresproducts;
  }*/
}
