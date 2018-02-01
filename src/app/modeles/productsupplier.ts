export class ProductSupplier {
  id: number;
  name: string;
  description: string[];
  deliveryRequirement: string[];
  certifications: string[];
  website: string[];
  contactPerson: string[];
  tel: string[];
  callPriceBymin: string;
  mail: string[];
  img: string;  
  address: AddressSupplier;
  constructor(id: number, name: string, description:string[], deliveryRequirement:string[],
     certifications: string[], website: string[], contactPerson: string[], tel: string[],
      callPriceBymin: string, mail: string[], img: string, address){
    this.id = id;
    this.name = name;
    this.description = description;
    this.deliveryRequirement = deliveryRequirement;
    this.certifications = certifications;
    this.website = website;
    this.contactPerson = contactPerson;
    this.tel = tel;
    this.callPriceBymin = callPriceBymin;
    this.mail = mail;
    this.img = img;
    this.address = address;
  }
}
export class AddressSupplier{
  addressId: number;
  city: string;
  lat: any;
  long: any;
  constructor(addressId,city,lat,long){
    this.addressId = addressId;
    this.city = city;
    this.lat = lat;
    this.long = long;
  }
}
