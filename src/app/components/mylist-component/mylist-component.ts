import { Component, OnInit } from '@angular/core';
import { MylistServices } from '../../services/myListService';
import { MyListObject } from '../../modeles/mylistObject';

@Component({
  selector: 'mylist-component',
  templateUrl: './mylist-component.html',
  styleUrls: ['./mylist-component.css']
})
export class MylistComponent {
  myList: MyListObject[];
  constructor(private myListService: MylistServices){
  }
  ngOnInit() {
    this.myList = this.myListService.myListOfProducts;
  }

}
