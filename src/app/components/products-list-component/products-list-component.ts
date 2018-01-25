import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { DataService } from '../../services/dataServices';
import { SearchServices } from '../../services/searchServices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-list-component',
  templateUrl: './products-list-component.html',
  styleUrls: ['./products-list-component.css']
})

export class ProductsListComponent implements OnInit {
  private newProducts; products; productsVentesFlash: Product[];
  searchResult = [];
  filteredOptions: Observable<string[]>;
  searchTerm : FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
  ];
  myControl: FormControl = new FormControl();

  constructor(private dataServices: DataService, 
    private searchServices: SearchServices,
    private route: ActivatedRoute){

  }
  ngOnInit() {
    this.newProducts = this.dataServices.getNewProducts();
    this.productsVentesFlash = this.dataServices.getProductsVentesFlash();
    //this.specialsOffresproducts = this.dataServices.getSpecialOffresProduct();
   /* this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );*/
  }    
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  ngOnDestroy() {
  }

}
