import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MylistServices } from '../../services/myListService';
import { MyListObject, ProductMylist } from '../../modeles/mylistObject';

@Component({
  selector: 'mylist-component',
  templateUrl: './mylist-component.html',
  styleUrls: ['./mylist-component.css']
})
export class MylistComponent {
  myList: MyListObject[];

  constructor(private myListService: MylistServices, private _location: Location){
  }
  ngOnInit() {
    this.myList = this.myListService.myListOfProducts;
  }
  decrementQuantity(element){
    if(element.quantity>1){
      element.quantity--;
    }
  }
  incrementQuantity(element){
    element.quantity++;
  }
  removeProduct(mylistObject: MyListObject, productMylist: ProductMylist){
    this.deleteFromArray(mylistObject.products, productMylist);
    if(mylistObject.products.length ===0){
      this.deleteFromArray(this.myList, mylistObject);
    }
  }
  deleteFromArray(array, element){
    var index = array.indexOf(element);
    array.splice(index, 1);
  }
  public backPage(){
    this._location.back();
  }
}
