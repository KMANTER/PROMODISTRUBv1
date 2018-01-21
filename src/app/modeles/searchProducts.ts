import { Product } from "./product";

export class ObjSearchProducts {
  products: Product[];
  arraySearchWords: string[];
  constructor(){
    this.products = [];
    this.arraySearchWords = [];
  }
}
