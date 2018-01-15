import { Component } from '@angular/core';
import { Product } from '../../modeles/product';

@Component({
  selector: 'app-index',
  templateUrl: './app-index.html',
  styleUrls: ['./app-index.css']
})
export class IndexComponent {
  private products: Product[] = [
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
      description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
      description: "Poulet fermier d'Auvergne jaune Poulet fermier d'Auvergne. Poulet nourri sans OGM (<0,9%). Produit frais classe A. Prêt à cuire. Eviscéré sans abats."
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
      description: "Manchons et ailerons de poulet, sirop de glucose, protéines de SOJA, amidon transformé de tapioca, sel, arôme naturel. 109 g de manchons et ailerons de poulet mis en oeuvre pour 100 g de wings party. Fabriqué dans un atelier qui utilise : gluten, lait, oeuf, céleri, moutarde"
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
      description: "Contact Exploitant / Service consommateur : LDC France LDC France BP 88 72308 Sablé-sur-Sarthe"
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
      description: "Magret de canard cru du Sud-Ouest Canard à foie gras du Sud-Ouest magret de canard gras"
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
      description: "SAUMON ATLANTIQUE BIO FUME 4 TRANCHES 120G"
    }
  ];

  private specialsOffresproducts: Product[] = [
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
  }];


  private offresproducts: Product[] = [
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
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
    description: "Poulet rôti issu poulet certifié, épices. Présence de gluten."
  },{
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
  }];
}

