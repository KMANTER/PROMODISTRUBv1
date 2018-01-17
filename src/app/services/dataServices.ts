import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { offresproducts, products, specialsOffresproducts } from '../mocks/produits-mocks';

@Injectable()
export class DataService {
  constructor() {
   }
   getAllProduct(): Product[]{
     return products;
   }
   getFeaturedProduct(): Product[]{
    return offresproducts;
  }
  getSpecialOffresProduct(): Product[]{
    return specialsOffresproducts;
  }
}
