import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import {  products} from '../mocks/produits-mocks';

@Injectable()
export class DataService {
  constructor() {
   }
   getAllProduct(): Product[]{
     return products;
   }
   getNewProducts(): Product[]{
    return products.filter((p:Product)=>{
      return p.isNewProduct;
    });
  }
  getProductsVentesFlash(): Product[]{
    return products.filter((p:Product)=>{
      return p.isFlashSale;
    });
  }

}
