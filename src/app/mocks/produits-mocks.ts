import { Product } from '../modeles/product';
import { ProductSupplier, AddressSupplier } from '../modeles/productsupplier';
import { Category } from '../modeles/category';
import { Label } from '../modeles/label';

export const categories: Category[] =[{
  name:"Charcuterie et produits traiteurs",
  img:"assets/images/category/entree-charcuterie.png",
  subCategories:[{name:"Charcuterie"},{name:"Traiteur"},{name:"Plats cuisinés"}]
},{
  name:"Produits de la mer", 
  img:"assets/images/category/produit-de-la-mer.png",
  subCategories:[{name:"Poisson"},{name:"Coquillages et crustacés"},{name:"Produits de la mer élaborés"}]
},{
  name:"Boucherie",  
  img:"assets/images/category/viandes.png",
  subCategories:[{name:"Bœuf"},{name:"Porc"},{name:"Veau"},{name:"Agneau"},{name:"Volaille"},{name:"Autres viandes"}]
},{
  name:"Fromages et produits laitiers",
  img:"assets/images/category/fromages-produits-laitiers.png",
  subCategories:[{name:"Fromage"},{name:"Fromage blanc et yaourt"},{name:"Beurre"},{name:"Crème"},{name:"Lait"},{name:"Œufs"}]
},{
  name:"Fruits, légumes et accompagnement", 
  img:"assets/images/category/fruits-legumes.png",
  subCategories:[{name:"Légumes"},{name:"Fruits"},{name:"Herbes et aromates"},{name:"Pomme de terre et Frites"}]
},{
  name:"Desserts et pâtisserie",
  img:"assets/images/category/desserts.png",
  subCategories:[{name:"Dessert prêt à consommer"},{name:"Ingrédients et préparations pour pâtisserie"}]
},{
  name:"Glaces",
  img:"assets/images/category/glaces.png",
  subCategories:[{name:"Glaces"},{name:"Sorbet"}]
},{
  name:"Boulangerie",
  img:"assets/images/category/pains.png",
  subCategories:[{name:"Pain"},{name:"Brioches et viennoiserie"},{name:"Farine et mix"}]
},{
  name:"Epicerie salée",
  img:"assets/images/category/epicerie-salees.png",
  subCategories:[{name:"Conserves"},{name:"Aromates et épices"},{name:"Pates et riz"},{name:"Huile, vinaigre et condiments"},{name:"Produits apéritifs"},{name:"Sauces, fonds et jus"}]
},{
  name:"Epicerie sucrée", 
  img:"assets/images/category/epicerie-sucree.png",
  subCategories:[{name:"Fruits secs et graines"},{name:"Café, thé, tisanes"},{name:"Les sucres"}, {name:"Le chocolat et pâtes à tartiner"},{name:"Les prêts à garnir"},{name:"Confiserie et biscuiterie"}]
},{
  name:"Boissons",  
  img:"assets/images/category/boissons.png",
  subCategories:[{name:"Vins"},{name:"Spiritueux"},{name:"Champagnes et effervescent"},{name:"Bière et cidres"},{name:"Softs, jus, sirop"},{name:"Eaux"}]
},{
  name:"Equipements",
  img:"assets/images/category/equipement.png",
  subCategories:[{name:"Equipement de cuisine"},{name:"Equipement hôtellerie"},{name:"Equipement et fourniture de bureau"}]
},{
  name:"Hygiène",  
  img:"assets/images/category/hygiene.png",
  subCategories:[{name:"Entretien et nettoyage"},{name:"Consommables"}]
}];

export const products: Product[] =
[
  {
  id: 1,
  name: "Pate à tartiner NUTELLA 2x3Kg",
  mark: "FERRERO",
  price: 27.10,
  oldPrice: "34,19",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["9,03€HT/Kg"],
  urlImage: "assets/images/products/product-id-1.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/06",
  category: "Epicerie sucrée",
  subCategory: "Le chocolat et pâtes à tartiner",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 2,
  name: "Mozzarella Di Bufala campana Boule, 2x75g",
  mark: "CASA AZZURRA",
  price: 1.05,
  oldPrice: "1,79",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["0,89 la pièce de 75g"],
  urlImage: "assets/images/products/product-id-2.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/09",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 3,
  name: "Fonds blanc de volaille, 3x800g",
  mark: "CHEF",
  price: 28.50,
  oldPrice: "42,75",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["9,50€HT/la  boite de 800g"],
  urlImage: "assets/images/products/product-id-3.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/07",
  category: "Epicerie salée",
  subCategory: "Sauces, fonds et jus",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 4,
  name: "Bavette d’aloyau prête à découper",
  mark: "Origine U.E",
  price: "Sous vide",
  oldPrice: "",
  devise:"",
  tva: "5,5%",
  priceByUnit: ["6,99€HT le KG"],
  urlImage: "assets/images/products/product-id-4.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(3,"Davigel",[],[],[],["www.davigel.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(3,"Rouen",49.44323,1.09997)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/15",
  category: "Boucherie",
  subCategory: "Bœuf",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 5,
  name: "Huile végétale pour friture 10L",
  mark: "RISSO ELITE",
  price: 22.70,
  oldPrice: "24,70",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["2,27€HT/litre"],
  urlImage: "assets/images/products/product-id-5.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/06",
  category: "Epicerie Salée",
  subCategory: "Huile, vinaigre et condiments",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 6,
  name: "Lait U.H.T Demi-écrémé ou entier 1L",
  mark: "BRIDEL",
  price: 0.59,
  oldPrice: "0,89",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-6.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(4,"Team Ouest",[],[],[],["www.team-ouest.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(4,"Caen",49.18286,-0.37068)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/11",
  category: "Fromages et produits laitiers",
  subCategory: "Lait",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 7,
  name: "Huile de tournesol 1L",
  mark: "LESIEUR",
  price: 1.65,
  oldPrice: "1,99",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-7.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/08",
  category: "Epicerie Salée",
  subCategory: "Huile, vinaigre et condiments",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 8,
  name: "Farine de Blé T45 1kg",
  mark: "FRANCINE",
  price: 0.50,
  oldPrice: "0,76",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-8.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(6,"Deroche",[],[],[],["www.deroche.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(6,"Le Mans",48.00611,0.19956)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/09",
  category: "Boulangerie",
  subCategory: "Farine et mix",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: true,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 9,
  name: "Jus d’orange à base de jus concentré 25CL",
  mark: "SAXO",
  price: 0.37,
  oldPrice: "0,49",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-9.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/09",
  category: "Boissons",
  subCategory: "Softs, jus, sirop",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 10,
  name: "Poulet fermier du Maine PAC Label Rouge",
  mark: "Origine France",
  price: "",
  oldPrice: "",
  devise:"",
  tva: "5,5%",
  priceByUnit: ["2,99 le Kg"],
  urlImage: "assets/images/products/product-id-10.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(7,"Avi-caux",[],[],[],["www.avi-caux.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(7,"Rouen",49.44323,1.09997)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/10",
  category: "Boucherie",
  subCategory: "Volaille",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: new Label("Label Rouge","assets/images/logo/logo-label-rouge.png")
},
{
  id: 11,
  name: "Gran Aroma Bar Café en grain 1kg",
  mark: "LAVAZZA",
  price: 15.59,
  oldPrice: "23,39",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["par Kg"],
  urlImage: "assets/images/products/product-id-11.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/11",
  category: "Epicerie sucrée",
  subCategory: "Café, thé, tisanes",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 12,
  name: "Bobine à dévidage central, Carton de 6",
  mark: "TORK",
  price: 38.45,
  oldPrice: "59,95",
  devise:"€ HT",
  tva: "20%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-12.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/13",
  category: "Hygiène",
  subCategory: "Consommables",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 13,
  name: "4 Poêles aluminium + 1 crêpière",
  mark: "METRO PROFESSIONNAL",
  price: 39,
  oldPrice: "45",
  devise:"€ HT",
  tva: "20%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-13.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/16",
  category: "Equipements",
  subCategory: "Equipement de cuisine",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 14,
  name: "Ramette papier A4 80G Sigma (vendu par 5)",
  mark: "METRO PROFESSIONNAL",
  price: 14,
  oldPrice: "15,98",
  devise:"€ HT",
  tva: "20%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-14.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(8,"Office-dépôt",[],[],[],["www.office-depot.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(7,"Saint-Denis",48.93618,2.35744)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/08",
  category: "Equipements",
  subCategory: "Equipement et fourniture de bureau",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 15,
  name: "Terminal de paiement fixe TPE iCT220 & iPP280 (Pinpad simple avec fonction sans contact)",
  mark: "INGENICO",
  price: 389,
  oldPrice: "445",
  devise:"€ HT",
  tva: "20%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-15.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/07",
  category: "Equipements",
  subCategory: "Equipement et fourniture de bureau",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 16,
  name: "Toaster 2 étages",
  mark: "METRO PROFESSIONNAL",
  price: 189,
  oldPrice: "230",
  devise:"€ HT",
  tva: "20%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-16.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/06",
  category: "Equipements",
  subCategory: "Equipement de cuisine",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: true,
  refProduit: "ref12345678",
  label: null
},
{
  id: 17,
  name: "Crème Perfection UHT 30% de M.G 1L",
  mark: "Elle&Vire professionnel",
  price: 2.83,
  oldPrice: "3,39",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["Soit 2,83€ le litre","Soit 16,98€HT le lot de 6"],
  urlImage: "assets/images/products/product-id-17.png",
  urlThumb: "",
  description: ["Idéal pour liaison instantanée et crème fouetté.","Maxi volume de sauce",
  "Liaison instantanée sans ajout de roux ou d’amidon","Tenue garantie en crème fouettée"],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/09",
  category: "Fromages et produits laitiers",
  subCategory: "Crème",
  ProductConditioning: ["Brique de 1L"],
  purchaseConditions:["Vendu par lot de 6 briques"],
  isNewProduct: false,
  isFlashSale: false,
  refProduit:"45639609",
  label: null
},
{
  id: 18,
  name: "Crème Epaisse Légère, 15% de M.G Sauces&cuissons",
  mark: "Président professionnel 1L",
  price: 2.62,
  oldPrice: "3,49",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["Soit 2,62€ HT le litre","Soit 10,47€HT le lot de 4"],
  urlImage: "assets/images/products/product-id-18.png",
  urlThumb: "",
  description: ["Fabriquée en Normandie, sa consistance épaisse et sa résistance à l'acidité garantissent un aspect lisse et une saveur douce",
  "Ne tranche pas en présence d'alcool ou d'ingrédient acide à chaud comme à froid",
  "Economique : peu de pertes pour amener le produit 'à la nappe'",
  "Parfaite pour le travail en liaison froide (froid positif) : remise en température des plats sans déphasage",
  "Supporte parfaitement le bain-marie ou le maintien en température pour la liaison chaude."],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/07",
  category: "Fromages et produits laitiers",
  subCategory: "Crème",
  ProductConditioning: ["Pot de 1 Litre","Vendu par 4"],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "8728446",
  label: null
},
{
  id: 19,
  name: "Crème Liquide UHT Multi-usage, 33% de M.G 1L",
  mark: "En cuisine",
  price: 2.05,
  oldPrice: "3,49",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["Soit 2,05€ HT le litre"],
  urlImage: "assets/images/products/product-id-19.png",
  urlThumb: "",
  description: ["Une texture onctueuse pour des sauces lisses et nappantes",
                "Une excellente stabilité à l’incorporation d’ingrédients acides ou d’alcool à chaud comme à froid : ne tranche pas",
                "Un taux de foisonnement élevé et régulier toute l’année",
                "Une excellente tenue de la crème fouettée sans affaissement ni exsudation"],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/09",
  category: "Fromages et produits laitiers",
  subCategory: "Crème",
  ProductConditioning: ["Brique de 1 Litre"],
  purchaseConditions:["A l’unité"],
  isNewProduct: false,
  isFlashSale: false,
  refProduit:"722334",
  label: null
},
{
  id: 20,
  name: "Liaisons & Cuissons Crème légère 18% M.G 1L",
  mark: "PRÉSIDENT Professionnel",
  price: 2.09,
  oldPrice: "2,90",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["Soit 2,09€ HT le litre"],
  urlImage: "assets/images/products/product-id-20.png",
  urlThumb: "",
  description: ["L'alternative technique haute performance adaptée à tous les usages en cuisson.",
                "40% de sauce en plus * : haut rendement en réduction",
                "Liaison parfaite nappante et homogène",
                "Supporte parfaitement le bain-marie tout au long du service même sur des sauces très acides",
                "Résistance parfaite à l'incorporation d'ingrédients acides ou d'alcool à chaud comme à froid : ne tranche pas",
                "Réduit vite et bien.",
                "Excellente résistance aux températures élevées pour les cuissons longues type gratins",
                "Une texture très lisse et onctueuse pour les appareils à crème prise"],
  supplier: new ProductSupplier(5,"Team Ouest Normandie",[],[],[],["www.team-ouest-normandie.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(5,"Normandie",48.87987039999999,0.17125290000001314)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/08",
  category: "Fromages et produits laitiers",
  subCategory: "Crème",
  ProductConditioning: ["Brique de 1 Litre"],
  purchaseConditions:["A l’unité"],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "57743899",
  label: null
},
{
  id: 21,
  name: "Activia au bifidus nature 16x125g",
  mark: "DANONE",
  price: 2.33,
  oldPrice: "3,49",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-21.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/06",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage blanc et yaourt",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 22,
  name: "Panier de Yoplait 16x125g",
  mark: "DANONE",
  price: 2.03,
  oldPrice: "3,05",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-22.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(0,"Metro",["Depuis 1971 METRO accompagne au quotidien les restaurateurs et commerçants indépendants en France. Nous les suivons dans leur création d’entreprise, dans leur croissance, mais aussi dans leurs difficultés et leurs évolutions.",
                                            "Pour les soutenir dans la mutation des exigences des consommateurs, nous nous engageons à :",
                                            "<b>Créer des solutions au quotidien</b> en proposant des services et une expertise afin de permettre à nos clients de se concentrer sur leur cœur de métier.",
                                            "<b>Construire et cultiver une relation de confiance et de proximité</b> en travaillant main dans la main avec eux et nos fournisseurs."]
                                            ,["Livraison sur toute la France","Montant minimum de livraison : 150€HT"]
                                            ,["Processus d’agréage certifiés ISO 9001","Entrepôts certifiés ISO 22000"]
                                            ,["www.metro.fr"]
                                            ,[]
                                            ,["0825 09 09 09"]
                                            ,"0,15"
                                            ,["dirsto.nat@metro.fr"]
                                            ,"assets/images/suppliers/metro.png"
                                            , new AddressSupplier(0,"Lille",50.62925,3.05726)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/07",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage blanc et yaourt",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 23,
  name: "Margarine au tournesol 250g",
  mark: "FRUIT D’OR",
  price: 0.73,
  oldPrice: "1,10",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [""],
  urlImage: "assets/images/products/product-id-23.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(9,"Passionfroid",[],[],[],["www.passionfroid.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(7,"Saint-Denis",48.93618,2.35744)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "20/02/2018",
  category: "Fromages et produits laitiers",
  subCategory: "Beurre",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 24,
  name: "ST MÔRET 150g",
  mark: "ST MORET",
  price: 0.99,
  oldPrice: "1,49",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["7,92€HT le kg"],
  urlImage: "assets/images/products/product-id-24.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(9,"Passionfroid",[],[],[],["www.passionfroid.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(7,"Saint-Denis",48.93618,2.35744)),
  statut: "Promo",
  type: "ambiant",
  endPromoDate: "2018/02/10",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 25,
  name: "Mozzarella Di Bufala campana Boule, 2x75g",
  mark: "CASA AZZURRA",
  price: 1.05,
  oldPrice: "1,79",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["0,89 la pièce de 75g"],
  urlImage: "assets/images/products/product-id-25.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(3,"Davigel",[],[],[],["www.davigel.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(3,"Rouen",49.44323,1.09997)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/11",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 26,
  name: "Tartiner & Cuisiner  20% de M.G 500g",
  mark: "ST MORET",
  price: 4.17,
  oldPrice: "5,21",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["8,34€HT/ kg"],
  urlImage: "assets/images/products/product-id-26.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/07",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 27,
  name: "Lait Demi-écrémé 6x1L",
  mark: "CASA AZZURRA",
  price: 2.60,
  oldPrice: "3,38",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["0,43€HT le litre"],
  urlImage: "assets/images/products/product-id-27.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/07",
  category: "Fromages et produits laitiers",
  subCategory: "Lait",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 28,
  name: "Lait U.H.T Demi-écrémé ou entier 1L",
  mark: "BRIDEL",
  price: 0.59,
  oldPrice: "0,89",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [],
  urlImage: "assets/images/products/product-id-28.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(9,"Passionfroid",[],[],[],["www.passionfroid.com"],[],[],null,[],"assets/images/suppliers/no-photo.png", new AddressSupplier(7,"Saint-Denis",48.93618,2.35744)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/06",
  category: "Fromages et produits laitiers",
  subCategory: "Lait",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 29,
  name: "Beurre Demi-sel réduit de 25% La pointe de sel",
  mark: "PAYSAN BRETON",
  price: 1.45,
  oldPrice: "2,08",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: [],
  urlImage: "assets/images/products/product-id-29.png",
  urlThumb: "",
  description: [""],
  supplier: new ProductSupplier(1,"Promocash",["<b>Promocash</b> est un multi-spécialiste de la distribution alimentaire avec une offre en produits frais, surgelés, épicerie, vins, brasserie et matériel professionnel à destination de plusieurs catégories de clientèle : les professionnels de la restauration et de l'hôtellerie, les cafés-bars, les revendeurs, les grands comptes, les associations, les collectivités.",
                                            "Promocash propose une gamme complète de produits alimentaires et non alimentaires adaptée aux particularités des métiers de ses clients, comptant de 7 000 à 12 000 références. En quelques années, Promocash est devenu le plus grand réseau de Cash & Carry livreurs indépendants en France, avec 139 magasins répartis partout en France, de moins de 1 600 m² à 4 000 m² et 15 drives."]
                                            ,["Livraison sur toute la France ","Montant minimum de livraison : 150€HT"]
                                            ,[]
                                            ,["www.promocash.com"]
                                            ,[]
                                            ,["02 32 10 76 10"]
                                            ,"0,15"
                                            ,[]
                                            ,"assets/images/suppliers/promocash.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "Promo",
  type: "frais",
  endPromoDate: "2018/02/06",
  category: "Fromages et produits laitiers",
  subCategory: "Beurre",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 30,
  name: "Rillettes de poulet artisanale, pot 200gr",
  mark: "Origine France",
  price: 3.95,
  oldPrice: "5,65",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["6,99€HT le KG"],
  urlImage: "assets/images/products/product-id-4.png",
  urlThumb: "",
  description: ["Des délicieuses rillettes de poulet rôti réalisées à partir de poulets français élevés à la ferme du Colombier dans la plus pure tradition.  Une recette réussi à tartiner sur un pain encore tiède. Effilochées à la main, vos clients apprécieront le goût bien marqué du poulet."],
  supplier: new ProductSupplier(2, "EARL DU COLOMBIER",["Installé sur la ferme familiale depuis plus de 25 ans, l'exploitation est composée de 60 ha de cultures et d'un atelier volailles de qualité.",
                                            "Productions de la ferme : Cultures : blé, betteraves, lin, féveroles. Élevage : poulets, pintades, canards, dindes, oies, chapons, poulardes.",
                                            "Les engagements du producteur : Alimentation fabriquée sur place, tracée sans OGM.",
                                            "Durée d'élevage supérieur à 100 jours.",
                                            "Abattage sur place dans un abattoir agréé CE (normes européennes).",
                                            "Maîtrise de l'ensemble du cycle de production (cultures, alimentation, élevage, abattage et vente)."]
                                            ,["Vente à la ferme, sur commande avant le jeudi midi",
                                            "A venir chercher à a ferme pendant les horaires d’ouverture :",
                                            "Vendredi: 9h30-12h et de 14h-18h30  et samedi: 9h30-12h Hors jours fériés."]
                                            ,[]
                                            ,["ferme-volaille-breaute.com"]
                                            ,["Mr Laurent ANQUETIL"]
                                            ,["0235384468", "0615925804"]
                                            ,null
                                            ,["anquetil.laurent76@orange.fr "]
                                            ,"assets/images/suppliers/EARL-DU-COLOMBIER.png"
                                            , new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "",
  type: "frais",
  endPromoDate: "2018/02/12",
  category: "Charcuterie et produits traiteurs",
  subCategory: "Charcuterie",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: null
},
{
  id: 31,
  name: "Farine de sarrazin 25 kg",
  mark: "AU MOULIN DE LA FATIGUE",
  price: 95,
  oldPrice: "126",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["5,04€HT le KG"],
  urlImage: "assets/images/products/product-id-31.png",
  urlThumb: "",
  description: [],
  supplier: new ProductSupplier(9, "Au moulin de la fatigue",[],[],[],[],[],[],null,[],"", new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "",
  type: "ambiant",
  endPromoDate: "31/01/2018",
  category: "Boulangerie",
  subCategory: "Farine et mix",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: new Label("Bio","assets/images/logo/bio.png")
},
{
  id: 32,
  name: "Saumon fumé biologique irlandais tranché main 2kg",
  mark: "LE FUMOIR GASTRONOMIQUE",
  price: 96.60,
  oldPrice: "138",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["69€HT le KG"],
  urlImage: "assets/images/products/product-id-32.png",
  urlThumb: "",
  description: [],
  supplier: new ProductSupplier(10, "Le fumoir gastronomique",[],[],[],[],[],[],null,[],"", new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "",
  type: "frais",
  endPromoDate: "31/01/2018",
  category: "Produits de la mer",
  subCategory: "Poisson",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: new Label("Bio","assets/images/logo/bio.png")
},
{
  id: 33,
  name: "Camembert au lait Cru 250g",
  mark: "GILLOT",
  price: 2.40,
  oldPrice: "3,10",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["9,60€HT le KG"],
  urlImage: "assets/images/products/product-id-33.png",
  urlThumb: "",
  description: [],
  supplier: new ProductSupplier(11, "GILLOT",[],[],[],[],[],[],null,[],"", new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "",
  type: "frais",
  endPromoDate: "31/01/2018",
  category: "Fromages et produits laitiers",
  subCategory: "Fromage",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: new Label("Bio","assets/images/logo/bio.png")
},
{
  id: 34,
  name: "Jambon Blanc Biologique tranché 320g",
  mark: "MARCEL SAVEUR BIO",
  price: 6.30,
  oldPrice: "9,00",
  devise:"€ HT",
  tva: "5,5%",
  priceByUnit: ["19,69€HT le KG"],
  urlImage: "assets/images/products/product-id-34.png",
  urlThumb: "",
  description: [],
  supplier: new ProductSupplier(12, "Marcel Saveur Bio",[],[],[],[],[],[],null,[],"", new AddressSupplier(1,"Versailles",48.80486,2.12036)),
  statut: "",
  type: "frais",
  endPromoDate: "31/01/2018",
  category: "Charcuterie et produits traiteurs",
  subCategory: "Charcuterie",
  ProductConditioning: [],
  purchaseConditions:[],
  isNewProduct: false,
  isFlashSale: false,
  refProduit: "ref12345678",
  label: new Label("Bio","assets/images/logo/bio.png")
}];