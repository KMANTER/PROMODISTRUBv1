import { Product } from '../modeles/product';
import { ProductSupplier, AddressSupplier } from '../modeles/productsupplier';

export const products: Product[] = [
  {
  id: 1,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Poulet rôti certifié",
  mark: "le poulet",
  price: "7,70€",
  oldPrice: "10€",
  urlImage: "assets/images/products/product-id-1-poulet-roti.jpg",
  urlThumb: "assets/images/products/product-id-1-poulet-roti-thumb.jpg",
  availability: true,
  description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
  supplier:{
    id:0,
    address: {addressId:0,city:"Lille", lat:50.62925,long:3.05726}
  }
},
{
  id: 2,
  statut: "Nouveau!",
  tag: "BESTSELLER",
  labelDiscount: "10% En vente",    
  name: "Poulet jaune d'Auvergne Filière Qualité",
  mark: "Carrefour",
  price: "8,49€",
  oldPrice: "9.30€",
  urlImage: "assets/images/products/product-id-2.jpg",
  urlThumb: "assets/images/products/product-id-2.jpg",
  availability: true,
  description: "Poulet fermier d'Auvergne jaune Poulet fermier d'Auvergne. Poulet nourri sans OGM (<0,9%). Produit frais classe A. Prêt à cuire. Eviscéré sans abats.",
  supplier: {
    id:0,
    address: {addressId:0,city:"Marseille", lat:43.29648,long:43.29648}
  }
  
},
{
  id: 3,
  statut: "Nouveau!",
  tag: "",
  labelDiscount: "30% En vente",    
  name: "Manchons/ailerons de poulet cuits nature",
  mark: "Maître Coq",
  price: "4,90€",
  oldPrice: "7.30€",
  urlImage: "assets/images/products/product-id-3.jpg",
  urlThumb: "assets/images/products/product-id-3.jpg",
  availability: true,
  description: "Manchons et ailerons de poulet, sirop de glucose, protéines de SOJA, amidon transformé de tapioca, sel, arôme naturel. 109 g de manchons et ailerons de poulet mis en oeuvre pour 100 g de wings party. Fabriqué dans un atelier qui utilise : gluten, lait, oeuf, céleri, moutarde",
  supplier:  {
    id:0,
    address: {addressId:0,city:"Versailles", lat:48.80486,long:2.12036}
  }
},
{
  id: 4,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Escalopes de dinde",
  mark: "Le Gaulois",
  price: "4,19€",
  oldPrice: "5,80€",
  urlImage: "assets/images/products/product-id-4.jpg",
  urlThumb: "assets/images/products/product-id-4.jpg",
  availability: false,
  description: "Contact Exploitant / Service consommateur : LDC France LDC France BP 88 72308 Sablé-sur-Sarthe",
  supplier:{
    id:0,
    address: {addressId:0,city:"Saint-Denis", lat:48.93618,long:2.35744}
  }
},
{
  id: 5,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Magret de canard Sud-Ouest",
  mark: "Reflets de France",
  price: "6,40€",
  oldPrice: "6,70€",
  urlImage: "assets/images/products/product-id-5.jpg",
  urlThumb: "assets/images/products/product-id-5.jpg",
  availability: true,
  description: "Magret de canard cru du Sud-Ouest Canard à foie gras du Sud-Ouest magret de canard gras",
  supplier:  {
    id:0,
    address: {addressId:0,city:"Versailles", lat:48.80486,long:2.12036}
  }
},
{
  id: 6,
  statut: "En vente",
  tag: "BESTSELLER",
  labelDiscount: "",    
  name: "Saumon fumé bio",
  mark: "Labeyrie",
  price: "7,95€",
  oldPrice: "8,10€",
  urlImage: "assets/images/products/product-id-6.jpg",
  urlThumb: "assets/images/products/product-id-6.jpg",
  availability: false,
  description: "SAUMON ATLANTIQUE BIO FUME 4 TRANCHES 120G",
  supplier: {
    id:0,
    address: {addressId:0,city:"Caen", lat:49.18286,long:-0.37068}
  }
},{
  id: 7,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Chocolat en poudre",
  mark: "le poulet",
  price: "3,62€",
  oldPrice: "4€",
  urlImage: "assets/images/products/product-id-7.jpg",
  urlThumb: "assets/images/products/product-id-7.jpg",
  availability: true,
  description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
  supplier: {
    id:0,
    address: {addressId:0,city:"Rouen", lat:49.44323,long:1.09997}
  }
  },{
  id: 8,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Café dosettes classique",
  mark: "le poulet",
  price: "2,89€",
  oldPrice: "3.5€",
  urlImage: "assets/images/products/product-id-8.jpg",
  urlThumb: "assets/images/products/product-id-8.jpg",
  availability: true,
  description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
  supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}},
  {
  id: 9,
  statut: "En vente",
  tag: "",
  labelDiscount: "",    
  name: "Thé 5 fruits rouges",
  mark: "le poulet",
  price: "1,75€",
  oldPrice: "3€",
  urlImage: "assets/images/products/product-id-9.jpg",
  urlThumb: "assets/images/products/product-id-9.jpg",
  availability: true,
  description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
  supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}
}];

export const suppliers: ProductSupplier[] = [
  new ProductSupplier(1,new AddressSupplier(0,"Lille",50.62925,3.05726)),
  new ProductSupplier(2,new AddressSupplier(0,"Paris",48.85661,2.35222)),
  new ProductSupplier(3,new AddressSupplier(0,"Versailles",48.80486,2.12036)),
  new ProductSupplier(4,new AddressSupplier(0,"Saint-Denis",48.93618,2.35744)),
  new ProductSupplier(5,new AddressSupplier(0,"Marseille",43.29648,43.29648)),
  new ProductSupplier(6,new AddressSupplier(0,"Caen",49.18286,-0.37068)),
  new ProductSupplier(7,new AddressSupplier(0,"Rouen",49.44323,1.09997)),
  new ProductSupplier(8,new AddressSupplier(0,"Le Mans",48.00611,0.19956)),
  new ProductSupplier(9,new AddressSupplier(0,"Rennes",48.11727, -1.67779))
]
  /*
export const specialsOffresproducts: Product[] = [
{
id: 7,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Chocolat en poudre",
mark: "le poulet",
price: "3,62€",
oldPrice: "4€",
urlImage: "assets/images/products/product-id-7.jpg",
urlThumb: "assets/images/products/product-id-7.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: this.suppliers[this.id]
},{
id: 8,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Café dosettes classique",
mark: "le poulet",
price: "2,89€",
oldPrice: "3.5€",
urlImage: "assets/images/products/product-id-8.jpg",
urlThumb: "assets/images/products/product-id-8.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: this.suppliers[this.id]
},{
id: 9,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Thé 5 fruits rouges",
mark: "le poulet",
price: "1,75€",
oldPrice: "3€",
urlImage: "assets/images/products/product-id-9.jpg",
urlThumb: "assets/images/products/product-id-9.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: this.suppliers[this.id]
}/*,{
id: 10,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Lait concentré sucré",
mark: "le poulet",
price: "2,16€",
oldPrice: "4€",
urlImage: "assets/images/products/product-id-10.jpg",
urlThumb: "assets/images/products/product-id-10.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
},{
id: 11,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Café soluble Viennois",
mark: "le poulet",
price: "4,09€",
oldPrice: "5€",
urlImage: "assets/images/products/product-id-11.jpg",
urlThumb: "assets/images/products/product-id-11.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
},{
id: 12,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Chocolat bio en poudre",
mark: "le poulet",
price: "3,99€",
oldPrice: "4,5€",
urlImage: "assets/images/products/product-id-12.jpg",
urlThumb: "assets/images/products/product-id-12.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
}];*/

export const ventesFlashProducts: Product[] = [
  {
    id: 9,
    statut: "En vente",
    tag: "",
    labelDiscount: "",    
    name: "Thé 5 fruits rouges",
    mark: "le poulet",
    price: "1,75€",
    oldPrice: "3€",
    urlImage: "assets/images/products/product-id-9.jpg",
    urlThumb: "assets/images/products/product-id-9.jpg",
    availability: true,
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
    supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}
    },{
    id: 10,
    statut: "En vente",
    tag: "",
    labelDiscount: "",    
    name: "Lait concentré sucré",
    mark: "le poulet",
    price: "2,16€",
    oldPrice: "4€",
    urlImage: "assets/images/products/product-id-10.jpg",
    urlThumb: "assets/images/products/product-id-10.jpg",
    availability: true,
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
    supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}    
    },
  {
    id: 17,
    statut: "En vente",
    tag: "",
    labelDiscount: "",    
    name: "Gel douche Bois des Tropiques",
    mark: "le poulet",
    price: "4,33€",
    oldPrice: "4,33€",
    urlImage: "assets/images/products/product-id-17.jpg",
    urlThumb: "assets/images/products/product-id-17.jpg",
    availability: true,
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
    supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}        
    },{
    id: 18,
    statut: "En vente",
    tag: "",
    labelDiscount: "",    
    name: "Déodorant Homme Nord Extrême Fraîcheur",
    mark: "le poulet",
    price: "3,83€",
    oldPrice: "3,83€",
    urlImage: "assets/images/products/product-id-18.jpg",
    urlThumb: "assets/images/products/product-id-18.jpg",
    availability: true,
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
    supplier: {id:0,address: {addressId:0,city:"Le Mans", lat:48.00611,long:0.19956}}            
    }
]

export const newProducts: Product[] = [
{
id: 13,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Cire coiffante Shine Force",
mark: "le poulet",
price: "3,55€",
oldPrice: "4€",
urlImage: "assets/images/products/product-id-13.jpg",
urlThumb: "assets/images/products/product-id-13.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: {
  id:0,
  address: {addressId:0,city:"Rennes", lat:48.11727,long:-1.67779}
}
},{
id: 14,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Shampooing Classic",
mark: "le poulet",
price: "3,58€",
oldPrice: "3,58€",
urlImage: "assets/images/products/product-id-14.jpg",
urlThumb: "assets/images/products/product-id-14.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier:{
  id:0,
  address: {addressId:0,city:"Rennes", lat:48.11727,long:-1.67779}
}
},{
id: 15,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Shampooing ortie et citron",
mark: "le poulet",
price: "2,59€",
oldPrice: "3€",
urlImage: "assets/images/products/product-id-15.jpg",
urlThumb: "assets/images/products/product-id-15.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: {
  id:0,
  address: {addressId:0,city:"Rennes", lat:48.11727,long:-1.67779}
}
},{
id: 16,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Déodorant Dark Temptation",
mark: "le poulet",
price: "4,57€",
oldPrice: "4,57€",
urlImage: "assets/images/products/product-id-16.jpg",
urlThumb: "assets/images/products/product-id-16.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten.",
supplier: {
  id:0,
  address: {addressId:0,city:"Rennes", lat:48.11727,long:-1.67779}
}
}/*,{
id: 17,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Gel douche Bois des Tropiques",
mark: "le poulet",
price: "4,33€",
oldPrice: "4,33€",
urlImage: "assets/images/products/product-id-17.jpg",
urlThumb: "assets/images/products/product-id-17.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
},{
id: 18,
statut: "En vente",
tag: "",
labelDiscount: "",    
name: "Déodorant Homme Nord Extrême Fraîcheur",
mark: "le poulet",
price: "3,83€",
oldPrice: "3,83€",
urlImage: "assets/images/products/product-id-18.jpg",
urlThumb: "assets/images/products/product-id-18.jpg",
availability: true,
description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
}*/];