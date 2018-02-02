import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { ProductMylist, MyListObject } from '../modeles/mylistObject';
import { ProductSupplier } from '../modeles/productsupplier';

@Injectable()
export class MylistServices {
  public myListOfProducts: MyListObject[];
  constructor() {
    this.myListOfProducts = [];
  }
  public addToMyList(product: Product, quantity){
    var existantSupplierIndex = this.isSupplierExist(this.myListOfProducts, product.supplier);
    //existe
    if(existantSupplierIndex !== -1){
      var indexProduct = this.isExitProduit(this.myListOfProducts[existantSupplierIndex].products, product);
      if(indexProduct !== -1){
        this.myListOfProducts[existantSupplierIndex].products[indexProduct].quantity+= quantity;
      }else{
        this.myListOfProducts[existantSupplierIndex].products.push({product:product, quantity:quantity});
      }
    }else{
      var myListProd: MyListObject = new MyListObject();
      myListProd.supplier = product.supplier;
      myListProd.products = [{product:product, quantity:quantity}];
      this.myListOfProducts.push(myListProd);
    }
  }
  private isSupplierExist(array: MyListObject[], supplier: ProductSupplier): number{
    return array.findIndex((element: MyListObject)=>{
      return element.supplier.name === supplier.name;
    });
  }
  private isExitProduit(array: ProductMylist[], product: Product): number{
    return array.findIndex((element: ProductMylist)=>{
      return element.product.id === product.id;
    });
  }
}
