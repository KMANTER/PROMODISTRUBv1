import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { products, categories} from '../mocks/produits-mocks';
import { Category } from '../modeles/category';

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
  getAllCategories():Category[]{
    return categories;
  }

}
