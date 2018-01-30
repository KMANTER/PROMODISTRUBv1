import { Product } from "./product";


export class FilterGenericObject {
  libellet: string;
  count: number;
  listProducts: Product[] = [];
  isSelected: boolean;
  constructor(libellet: string, product: Product, isSelected?:boolean){
    this.libellet = libellet;
    this.count = 1;
    if(product!=null){
      this.listProducts.push(product);
    }
    this.isSelected = isSelected ? isSelected : false;
  }
}
