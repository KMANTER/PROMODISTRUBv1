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
  productCount: number;
  filtersGroups: GroupFiltersObject[];
  countAllActiveFilters: number;
  isInitialized: boolean; 
  listSelectedItemFilter: string[];
  maxPrice: number;
  isActivatedFilterPrice: boolean;
  filterPriceValue: number;
  constructor() {
    this.countAllActiveFilters = 0;
    this.listFiltredProducts =[];
    this.initListFilterGroups();
    this.isInitialized = false;
    this.listSelectedItemFilter = [];
    this.listSearchProduct = [];
    this.maxPrice = 0;
    this.isActivatedFilterPrice = false;
    this.productCount = 0;

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
  public getListProduct(): Product[]{
    if(this.countAllActiveFilters > 0){
      this.productCount = this.listFiltredProducts.length;
      return this.listFiltredProducts;
    }else{
      this.productCount = this.listSearchProduct.length;
      return this.listSearchProduct;
    }
  /*  let products: Product[] = [];
    if(this.countAllActiveFilters > 0){
      products = this.isActivatedFilterPrice ? this.priceFilter(this.filterPriceValue, this.listFiltredProducts):this.listFiltredProducts;
      this.productCount = products.length;
    }else{
      products=  this.isActivatedFilterPrice ? this.priceFilter(this.filterPriceValue, this.listSearchProduct):this.listSearchProduct;
      this.productCount = products.length;
    }
    return products;*/
  }
  
  public initFiltersGroups(productsList: Product[], initMaxPrice?: boolean){
    this.productCount = productsList.length;
    this.initListFilterGroups();
    productsList.forEach((p: Product)=>{
      if(initMaxPrice){
        let price: number = this.getPriceFromStr(p.price);
        if( price> this.maxPrice){
          this.maxPrice = price;
        }
      }
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
    if(this.countAllActiveFilters === 0){
      this.filterPriceValue = this.maxPrice;
    }
    this.isInitialized = true;
  }
  public updateFiltredProductList(){
    this.countAllActiveFilters = 0;
    this.listFiltredProducts = [];
    this.listSelectedItemFilter = [];

    this.filtersGroups.forEach((filterGrp: GroupFiltersObject)=>{
      let tempListFilter= [];
      filterGrp.listFilters.forEach((filterlst: FilterGenericObject)=>{
        if(filterlst.isSelected){
          this.countAllActiveFilters++;
          this.listSelectedItemFilter.push(filterlst.libellet);
          tempListFilter = _.union(tempListFilter, filterlst.listProducts);
        }
      });
       if(tempListFilter.length > 0){
        this.listFiltredProducts = this.listFiltredProducts.length === 0 ? tempListFilter : _.intersection(this.listFiltredProducts, tempListFilter);
        if(this.isActivatedFilterPrice){
          this.listFiltredProducts = this.priceFilter(this.filterPriceValue,this.listFiltredProducts);
        }
      }
    });
    if(this.countAllActiveFilters === 0 && this.isActivatedFilterPrice){
      this.listFiltredProducts = this.priceFilter(this.filterPriceValue, this.listSearchProduct);
      this.countAllActiveFilters ++;
    }
    this.initFiltersGroups(this.countAllActiveFilters > 0 ? this.listFiltredProducts : this.listSearchProduct);
  }
  private priceFilter(maxPrice: number, products: Product[]): Product[]{
      return products.filter((value:Product)=>{
        if(this.getPriceFromStr(value.price) <= maxPrice){
          return true;
        }else{
          console.log(value);
          return false;
        }
      });
  }
  private getPriceFromStr(price: string): number{
    let priceNumber: number = parseFloat(price.substring(0,price.indexOf("€")).replace(",","."));
    if(isNaN(priceNumber)){
      priceNumber = 0;
    }
    return priceNumber;
  }
}
