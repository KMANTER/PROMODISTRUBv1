import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchServices} from '../../services/searchServices';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { ObjSearchProducts } from '../../modeles/searchProducts';
import { Position } from '@angular/compiler';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputSearch: FormControl = new FormControl();
  filteredProducts: Observable<Product[]>;  
  searchWords: string[];
  word: string;
  constructor(private searchServices: SearchServices, public cdRef:ChangeDetectorRef) { 

  }
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
  ngOnInit() {
    this.filteredProducts = this.inputSearch.valueChanges
    .pipe(
      startWith(''),
      map((val) =>{
        var toReturn = this.searchServices.searchProducts(val);
        this.searchWords = this.searchServices.getSearchWords();
        console.log(this.searchWords);
        return toReturn;
      })
    );
  }
 highlight(content: string,query: string) {
    if(!query) {
        return content;
    }
    return content.replace(new RegExp(query, "gi"), match => {
        return '<span class="highlightText">' + match + '</span>';
    });
}
search(value: string){
  this.searchServices.searchProductsByRequest(value);
}


}
