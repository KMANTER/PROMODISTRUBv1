import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import {  products, newProducts, ventesFlashProducts } from '../mocks/produits-mocks';

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
  getProductsVentesFlash(): Product[]{
    return ventesFlashProducts;
  }
 /* getSpecialOffresProduct(): Product[]{
    return specialsOffresproducts;
  }*/
}
