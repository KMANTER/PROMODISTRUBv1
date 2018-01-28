import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { products} from '../mocks/produits-mocks';
import { SearchServices } from './searchServices';
import { GroupFiltersObject } from '../modeles/groupFiltersObject';
import * as _ from 'underscore';
import { FilterGenericObject } from '../modeles/filterGenericObject';
@Injectable()
export class FiltersService {
  listSearchProduct: Product[];
  listFiltredProducts: Product[];
  filtersGroups: GroupFiltersObject[];
  countActiveFilters: number;
  isInitialized: boolean; 
  listSelectedItemFilter: string[];
  constructor() {
    this.countActiveFilters = 0;
    this.listFiltredProducts =[];
    this.initListFilterGroups();
    this.isInitialized = false;
    this.listSelectedItemFilter = [];
    this.listSearchProduct = [];
  }
  private initListFilterGroups(){
    this.filtersGroups = [
      new GroupFiltersObject("Types"),
      new GroupFiltersObject("Marques"),
      new GroupFiltersObject("Fournisseurs")
    ];
  }
  public setListSearchProduct(productsList: Product[]){
    this.listSearchProduct = productsList;
  }
  public initFiltersGroups(productsList: Product[]){
    this.initListFilterGroups();
    productsList.forEach((p: Product)=>{
      this.filtersGroups.forEach((filterGroup: GroupFiltersObject)=>{
        var filterValue: string = "";        
        switch(filterGroup.libellet){
          case 'Types':{filterValue= p.type}break;
          case 'Marques':{filterValue= p.mark}break;
          case 'Fournisseurs':{filterValue = p.supplier.name}break;
          default: break;
        }
        var pos = filterGroup.listFilters.findIndex((element: FilterGenericObject)=>{
          if(element.libellet == filterValue){
            element.count++;
            element.isSelected= this.listSelectedItemFilter.findIndex(value => value === filterValue) !== -1;
            element.listProducts.push(p);
            return true;
          }else{
            return false;
          }
        });
        if(pos === -1){
          filterGroup.listFilters.push(new FilterGenericObject(filterValue,p, this.listSelectedItemFilter.findIndex(value => value === filterValue) !== -1));
        }
      });
    });
    this.isInitialized = true;
  }
  public updateFiltredProductList(){
    this.countActiveFilters = 0;
    this.listFiltredProducts = [];
    this.listSelectedItemFilter = [];
    this.filtersGroups.forEach((filterGrp: GroupFiltersObject)=>{
      let tempListFilter= [];
      filterGrp.listFilters.forEach((filterlst: FilterGenericObject)=>{
        if(filterlst.isSelected){
          this.countActiveFilters++;
          this.listSelectedItemFilter.push(filterlst.libellet);
          tempListFilter = _.union(tempListFilter, filterlst.listProducts);
        }
      });
      if(tempListFilter.length > 0){
        this.listFiltredProducts = this.listFiltredProducts.length === 0 ? tempListFilter : _.intersection(this.listFiltredProducts, tempListFilter);
      }
    });
    this.initFiltersGroups(this.countActiveFilters > 0 ? this.listFiltredProducts : this.listSearchProduct);
  }
}
