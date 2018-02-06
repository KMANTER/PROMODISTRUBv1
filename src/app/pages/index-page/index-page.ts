import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataServices';
import { Category } from '../../modeles/category';
import { SearchServices } from '../../services/searchServices';
import { AssetsServices } from '../../services/assetsServices';

@Component({
  selector: 'app-index',
  templateUrl: './index-page.html',
  styleUrls: ['./index-page.css']
})
export class IndexComponent implements OnInit{
  listCategories: Category[];
  constructor(private dataService: DataService, private searchService: SearchServices, private assetservices: AssetsServices){
    
  }
  ngOnInit() {
    this.listCategories = this.dataService.getAllCategories();
  }
  searchProducts(by: string, valueRequest: string){
    this.assetservices.scrollToProductList();
    this.searchService.searchProductByCat(by, valueRequest);
  }
}

