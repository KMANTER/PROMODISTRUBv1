import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import {  products } from '../mocks/produits-mocks';

@Injectable()
export class DataService {
  constructor() {
   }
   getAllProduct(): Product[]{
     return products;
   }
   getFeaturedProduct(): Product[]{
    return null;
  }
 /* getSpecialOffresProduct(): Product[]{
    return specialsOffresproducts;
  }*/
}
