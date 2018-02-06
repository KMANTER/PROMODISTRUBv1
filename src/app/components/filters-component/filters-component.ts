import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FiltersService} from '../../services/filtersService';
import {Observable} from 'rxjs/Observable';
import { GroupFiltersObject } from '../../modeles/groupFiltersObject';
import { Product } from '../../modeles/product';
import { AssetsServices } from '../../services/assetsServices';

@Component({
  selector: 'filters-component',
  templateUrl: './filters-component.html',
  styleUrls: ['./filters-component.css']
})
export class FiltersComponent implements OnInit {
  inputSearch: FormControl = new FormControl();
  filtersLists: GroupFiltersObject[];
  productsList: Product[];
  selected: boolean;
  maxPrice = 100;
  minPrice = 0;
  step = 1;
  priceValue = 0;
  constructor(private filtersService: FiltersService, private assetservices: AssetsServices) { 
    this.selected = false;
  }

  filtrer(){
      this.assetservices.scrollToProductList();
      this.filtersService.updateFiltredProductList();
  }
  ngOnInit() {
    this.filtersLists = this.filtersService.filtersGroups;
  }
  onInputChange(event: any) {
    this.filtersService.isActivatedFilterPrice = true;
  }
  
}
