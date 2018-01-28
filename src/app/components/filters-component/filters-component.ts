import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FiltersService} from '../../services/filtersService';
import {Observable} from 'rxjs/Observable';
import { GroupFiltersObject } from '../../modeles/groupFiltersObject';

@Component({
  selector: 'filters-component',
  templateUrl: './filters-component.html',
  styleUrls: ['./filters-component.css']
})
export class FiltersComponent implements OnInit {
  inputSearch: FormControl = new FormControl();
  filtersLists: GroupFiltersObject[];
  selected: boolean;
  constructor(private filtersService: FiltersService) { 
    this.selected = false;
  }

  filtrer(){
    this.filtersService.updateFiltredProductList();
  }
  ngOnInit() {
    this.filtersLists = this.filtersService.filtersGroups;
  }
}
