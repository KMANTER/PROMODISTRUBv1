import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { DataService } from '../../services/dataServices';

@Component({
  selector: 'app-index',
  templateUrl: './app-index.html',
  styleUrls: ['./app-index.css']
})
export class IndexComponent {
  private offresproducts; products; specialsOffresproducts: Product[];
  searchTerm : FormControl = new FormControl();
  
  searchResult = [];
  constructor(private dataServices: DataService){

  }
  myControl: FormControl = new FormControl();
  
    options = [
      'One',
      'Two',
      'Three'
    ];
  
    filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.offresproducts = this.dataServices.getFeaturedProduct();
    this.products = this.dataServices.getAllProduct();
    this.specialsOffresproducts = this.dataServices.getSpecialOffresProduct();
      
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

