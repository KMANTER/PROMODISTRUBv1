import { Injectable } from '@angular/core';

@Injectable()
export class AssetsServices {
  public listProductsElementHTML: any;
  constructor() {
  }
  scrollToProductList() { 
    window.scrollTo(this.listProductsElementHTML.nativeElement.getBoundingClientRect().x, this.listProductsElementHTML.nativeElement.getBoundingClientRect().y);
  }
}
