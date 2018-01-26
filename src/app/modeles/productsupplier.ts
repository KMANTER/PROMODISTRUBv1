export class ProductSupplier {
  id: number;
  name: string;  
  address: AddressSupplier;
  constructor(id, address){
    this.id = id;
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
