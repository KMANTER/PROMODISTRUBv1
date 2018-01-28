import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {OwlCarousel} from 'ng2-owl-carousel';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { DataService } from '../../services/dataServices';
import { SearchServices } from '../../services/searchServices';
import { ActivatedRoute } from '@angular/router';
import { FiltersService } from '../../services/filtersService';

@Component({
  selector: 'products-list-component',
  templateUrl: './products-list-component.html',
  styleUrls: ['./products-list-component.css']
})

export class ProductsListComponent implements OnInit {
  @ViewChild('owlElementNewProd') owlElement: OwlCarousel;

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
    private route: ActivatedRoute,
    private filtersService: FiltersService){
      
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

  next() {
    this.owlElement.next([200]);
    //duration 200ms
  }
}
