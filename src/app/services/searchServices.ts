import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { DataService } from './dataServices';
import { FiltersService } from './filtersService';
import { ProductsListComponent } from '../components/products-list-component/products-list-component';
import { promise } from 'selenium-webdriver';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SearchServices {
  searchActionOn: boolean;
  listFlashSellProducts: Product[];
  listNewProducts: Product[];
  listSearchProduct: Product[];
  listSearchWords: string[];
  static distanceMax: number = 50;
  private userPosition: Position;
  constructor(public dataServices: DataService, private filtersService: FiltersService) {
    this.listSearchProduct = null;
    this.listFlashSellProducts = dataServices.getProductsVentesFlash();
    this.listNewProducts = dataServices.getNewProducts();
    this.userPosition = null;
  }

  searchProducts(searchWord: string): Product[]{
    var listSearchWords: string[]= [];    
    var toReturn: any[]= [];
    if(searchWord.length > 2){
      listSearchWords.push(searchWord);
      toReturn  = this.dataServices.getAllProduct().filter((product) =>{
        var posOccName : number = product.name.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase());
        var posOccurSupplier : number = product.supplier.name.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase());
        var posEndOfWord: number = this.getIndexEndOfWord(product.name, posOccName);
        if(posOccName !==-1 && posEndOfWord!==-1){
          var substring: string = product.name.substring(posOccName, posEndOfWord);
          if(listSearchWords.find(
            (element)=>{return element.toLowerCase()===substring.toLocaleLowerCase()})
             === undefined){
            listSearchWords.push(substring);            
          }
        }
        return  posOccName !== -1 || posOccurSupplier !== -1;
      });
    }
    this.listSearchWords = listSearchWords;
    return toReturn;
  }
  public searchProductsByRequest(req: string){
    this.searchActionOn = true;
    var dataProducts: Product[] = this.dataServices.getAllProduct();
    this.listSearchProduct = dataProducts.filter((p: Product)=>{
      if(this.userPosition){
        return this.distanceFiltration(p) && (p.name.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1 || p.supplier.name.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1);
      }else{
        return (p.name.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1 || p.supplier.name.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1);  
      }
    });
    this.filtersService.initFiltersGroups(this.listSearchProduct, true);
    this.filtersService.setListSearchProduct(this.listSearchProduct);   

  }
  public searchProductByCat(typeCat: string, req: string){
    this.searchActionOn = true;
    var dataProducts: Product[] = this.dataServices.getAllProduct();    
    switch(typeCat){
      case 'category':{
        this.listSearchProduct = dataProducts.filter((p: Product)=>{
          if(this.userPosition){
            return this.distanceFiltration(p) && p.category.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1;
          }else{
            return p.category.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1;  
          }
        });
      }break;
      case 'subCategory':{
        this.listSearchProduct = dataProducts.filter((p: Product)=>{
          if(this.userPosition){
            return this.distanceFiltration(p) && p.subCategory.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1;
          }else{
            return p.subCategory.toLocaleLowerCase().indexOf(req.toLocaleLowerCase()) !== -1;  
          }
        });
      }break;
      default:break;
    }
    this.filtersService.initFiltersGroups(this.listSearchProduct, true); 
    this.filtersService.setListSearchProduct(this.listSearchProduct);   
  }
  public getSearchWords(): string[]{
    return this.listSearchWords;    
  }
  public getProductById(id: number): Product{
    var indexOfProduct = this.dataServices.getAllProduct().findIndex(p => p.id === id);
    return this.dataServices.getAllProduct()[indexOfProduct];
  }

  private distanceFiltration(product: Product): boolean{
    return this.distance(product.supplier.address.lat,
      product.supplier.address.long,
      this.userPosition.coords.latitude,
      this.userPosition.coords.longitude,
      "K") <= SearchServices.distanceMax ;
  }
  /*public filterListSearchProductsByPosition(){
    var dataProducts = !this.listSearchProduct ? this.dataServices.getAllProduct() : this.listSearchProduct;      
    this.listSearchProduct = dataProducts.filter((element: Product) =>{
      console.log(element.name+" "+element)
      return this.distance(element.supplier.address.lat,
                            element.supplier.address.long,
                            this.userPosition.coords.latitude,
                            this.userPosition.coords.longitude,
                            "K") <= SearchServices.distanceMax ;});
    this.filtersService.initFiltersGroups(this.listSearchProduct, true); 
    this.filtersService.setListSearchProduct(this.listSearchProduct);   
  }*/
  public addUserPostion(p: Position){
    this.userPosition = p;
    //this.filterListSearchProductsByPosition();
    this.updateCacheOfListProductsNewAndFlashSell();
  }
  public updateCacheOfListProductsNewAndFlashSell(){
    if(this.userPosition){
      this.listFlashSellProducts = this.dataServices.getProductsVentesFlash().filter((p:Product)=>{
        return this.distance(p.supplier.address.lat,
          p.supplier.address.long,
          this.userPosition.coords.latitude,
          this.userPosition.coords.longitude,
          "K") <= SearchServices.distanceMax ;
      });
      this.listNewProducts = this.dataServices.getNewProducts().filter((p:Product)=>{
        return this.distance(p.supplier.address.lat,
          p.supplier.address.long,
          this.userPosition.coords.latitude,
          this.userPosition.coords.longitude,
          "K") <= SearchServices.distanceMax ;
      });
    }else{
      this.listNewProducts = this.dataServices.getNewProducts();
      this.listFlashSellProducts = this.dataServices.getProductsVentesFlash();
    }
  }
  private distance(lat1, lon1, lat2, lon2, unit): number {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }
  private getIndexEndOfWord(word: string, fromPos?: number){
    return   word.indexOf(" ", fromPos) !== -1 ? 
                    word.indexOf(" ", fromPos) : word.indexOf("  ", fromPos) !== -1 ? 
                    word.indexOf("  ", fromPos) : -1;
  }
}
