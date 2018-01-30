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
  @ViewChild('owlElementNewProd') owlElementNewProd: OwlCarousel;
  @ViewChild('owlElementVentesFlash') owlElementVFlash: OwlCarousel;

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

  next(element: string) {
    if(element === "Vflash")
      this.owlElementVFlash.next([200]);
    else if(element === "new")
      this.owlElementNewProd.next([200]);
  }
  prev(element: string) {
    if(element === "Vflash")
      this.owlElementVFlash.previous([200]);
    else if(element === "new")
      this.owlElementNewProd.previous([200]);
  }
  getItemsCount(){
    return this.filtersService.countAllActiveFilters === 0 && (this.searchServices.listSearchProduct) ? this.searchServices.listSearchProduct.length : this.filtersService.listFiltredProducts.length
  }
}
