import { ProductSupplier } from "./productsupplier";
import { Product } from "./product";


export class MyListObject {
  supplier: ProductSupplier;
  products: ProductMylist[];
}
export class ProductMylist{
  product: Product;
  quantity: number;
}

