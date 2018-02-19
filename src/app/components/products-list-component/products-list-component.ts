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
import { AssetsServices } from '../../services/assetsServices';

@Component({
  selector: 'products-list-component',
  templateUrl: './products-list-component.html',
  styleUrls: ['./products-list-component.css']
})

export class ProductsListComponent implements OnInit {
  @ViewChild('owlElementNewProd') owlElementNewProd: OwlCarousel;
  @ViewChild('owlElementVentesFlash') owlElementVFlash: OwlCarousel;
  @ViewChild('target') elementHTMLTarget: any;

  private newProducts; products; productsVentesFlash: Product[];
  searchResult = [];
  filteredOptions: Observable<string[]>;
  searchTerm : FormControl = new FormControl();
  myControl: FormControl = new FormControl();
  public sortByselected: string;
  public grid: string = 'grid';
  public list: string = 'list';
  constructor(private dataServices: DataService, 
    public searchServices: SearchServices,
    public filtersService: FiltersService, private assetsServices: AssetsServices){
  }
  ngOnInit() {
    this.newProducts = this.dataServices.getNewProducts();
    this.productsVentesFlash = this.dataServices.getProductsVentesFlash();
    this.assetsServices.listProductsElementHTML = this.elementHTMLTarget;
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
  sortByChange(){
    switch(this.sortByselected){
      case 'lowPrice':{this.searchServices.order.by = "price"; this.searchServices.order.reverse = false;}break;
      case 'hightPrice':{this.searchServices.order.by = "price"; this.searchServices.order.reverse = true;}break;
      case 'pertinence':{this.searchServices.order.by = "name";this.searchServices.order.reverse = false;}break;
      case 'new':{this.searchServices.order.by = "isNewProduct";this.searchServices.order.reverse = true;}break;
    }
  }
}
