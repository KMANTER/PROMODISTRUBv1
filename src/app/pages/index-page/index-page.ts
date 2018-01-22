import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { DataService } from '../../services/dataServices';
import { SearchServices } from '../../services/searchServices';

@Component({
  selector: 'app-index',
  templateUrl: './index-page.html',
  styleUrls: ['./index-page.css']
})
export class IndexComponent {
  private newProducts; products; specialsOffresproducts: Product[];
  searchTerm : FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
  ];
  searchResult = [];
  constructor(private dataServices: DataService, private searchServices: SearchServices){

  }
  myControl: FormControl = new FormControl();
  

  
    filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.newProducts = this.dataServices.getNewProducts();
    //this.specialsOffresproducts = this.dataServices.getSpecialOffresProduct();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }    
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}

