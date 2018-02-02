import { ProductSupplier } from "./productsupplier";

export class Product {
  id: number;
  name: string;
  mark: string;  
  price: any;  
  oldPrice: string;
  devise: string;  
  tva: string;
  priceByUnit: string[]  
  urlImage: string;
  urlThumb: string;
  description: string[];
  supplier: ProductSupplier;
  statut: string;
  type: string;
  endPromoDate: string;
  category: string;
  subCategory: string;
  ProductConditioning: string[];
  purchaseConditions:string[];
  isNewProduct: boolean;
  isFlashSale: boolean;
  refProduit: string;
}
