import { Injectable } from '@angular/core';
import { Product } from '../modeles/product';
import { DataService } from './dataServices';
import { ProductsListComponent } from '../components/products-list-component/products-list-component';

@Injectable()
export class SearchServices {
  allProducts: Product[];
  dataProducts: Product[];
  arraySearchWords: string[];
  static distanceMax: number = 50;
  detailsProduit: Product;
  constructor(public dataServices: DataService) {
    this.allProducts = null;
    this.detailsProduit = null;
  }

  searchProducts(searchWord: string): Product[]{
    var arraySearchWords: string[]= [];    
    var toReturn: any[]= [];
    if(searchWord.length > 2){

      arraySearchWords.push(searchWord);
      toReturn  = this.dataServices.getAllProduct().filter((product) =>{
        var pos : number = product.name.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase());
        var posEndOfWord: number = product.name.indexOf(" ", pos) !== -1? product.name.indexOf(" ", pos) : product.name.indexOf("  ", pos) !== -1 ? product.name.indexOf("  ", pos) : -1;
        if(pos !==-1 && posEndOfWord!==-1){
          var substring: string = product.name.substring(pos, posEndOfWord);
          if(arraySearchWords.find(
            (element)=>{return element.toLowerCase()===substring.toLocaleLowerCase()})
             === undefined){
            arraySearchWords.push(substring);            
          }
        }
        return  pos !== -1;
      });
    }
    this.arraySearchWords = arraySearchWords;
    return toReturn;
  }
  getSearchWords(): string[]{
    return this.arraySearchWords;    
  }
  filterProducts(val: string){
    if(!this.dataProducts){      
      this.dataProducts = this.dataServices.getAllProduct();
    }
    this.allProducts = this.dataProducts.filter((element: Product) =>{
      return element.name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1;
    });
  }
  getProductById(id: number): Product{
    var indexOfProduct = this.dataServices.getAllProduct().findIndex(p => p.id === id);
    return this.dataServices.getAllProduct()[indexOfProduct];
  }


  public filterProductsByDistance(position: Position): void{
    if(!this.dataProducts){
      this.dataProducts = this.dataServices.getAllProduct();      
    }
    this.allProducts = this.dataProducts.filter((element: Product) =>{
      console.log(element.name+" "+element)
      return this.distance(element.supplier.address.lat,
                            element.supplier.address.long,
                            position.coords.latitude,
                            position.coords.longitude,
                            "K") <= SearchServices.distanceMax ;
    });
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
}
