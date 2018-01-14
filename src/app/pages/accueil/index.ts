import { Component } from '@angular/core';
import { Product } from '../../modeles/product';

@Component({
  selector: 'app-index',
  templateUrl: './app-index.html',
  styleUrls: ['./app-index.css']
})
export class IndexComponent {
  private products: Product[] = [{
    statut: "sales",
    name: "viande",
    mark: "halal",
    price: "150 €",
    imgsrc: "assets/images/products/product-11.jpg"
  },{
    statut: "sales",
    name: "viande",
    mark: "halal",
    price: "150 €",
    imgsrc: "assets/images/products/product-11.jpg"
  },{
    statut: "sales",
    name: "viande",
    mark: "halal",
    price: "150 €",
    imgsrc: "assets/images/products/product-11.jpg"
  },{
    statut: "sales",
    name: "viande",
    mark: "halal",
    price: "150 €",
    imgsrc: "assets/images/products/product-11.jpg"
  },{
    statut: "sales",
    name: "viande",
    mark: "halal",
    price: "150 €",
    imgsrc: "assets/images/products/product-11.jpg"
  }];
}
