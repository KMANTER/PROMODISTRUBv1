import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MylistServices } from '../../services/myListService';
import { MyListObject } from '../../modeles/mylistObject';

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
    if(element.quantity>0){
      element.quantity--;
    }
  }
  incrementQuantity(element){
    element.quantity++;
  }
  public backPage(){
    this._location.back();
  }
}
