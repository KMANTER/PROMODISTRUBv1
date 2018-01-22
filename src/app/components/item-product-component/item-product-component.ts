import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Product } from '../../modeles/product';

@Component({
  selector: 'item-product-component',
  templateUrl: './item-product-component.html',
  styleUrls: ['./item-product-component.css']
})

export class ItemProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
