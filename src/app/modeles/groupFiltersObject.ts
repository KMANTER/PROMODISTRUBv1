import { Product } from "./product";
import { FilterGenericObject } from "./filterGenericObject";


export class GroupFiltersObject {
  libellet: string;
  listFilters: FilterGenericObject[];
  constructor(libellet: string, listFilters?:FilterGenericObject[]){
    this.libellet = libellet;
    this.listFilters = listFilters ? listFilters : [];
  }
}
