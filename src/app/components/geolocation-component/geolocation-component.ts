import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchServices} from '../../services/searchServices';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Product } from '../../modeles/product';
import { Position } from '@angular/compiler';
declare var google: any;


@Component({
  selector: 'geolocation-component',
  templateUrl: './geolocation-component.html',
  styleUrls: ['./geolocation-component.css']
})
export class GeolocationComponent implements OnInit {

  inputGeoLocation: FormControl = new FormControl();
  constructor(private searchServices: SearchServices) { 
  }

  ngOnInit() {}
  search(value: string){
  }
  geolocate(){
    if(!!navigator.geolocation) {
      var position = navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        this.displayLocation(position.coords.latitude,position.coords.longitude);
        this.searchServices.addUserPostion(position);
      });
    } else {
        // No support
    }
  }

  displayLocation(latitude,longitude){
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        (results:any[], status) =>{
            if (status == google.maps.GeocoderStatus.OK) {
              var address = results.find((element)=>{
                return element.types.indexOf("locality") !== -1;
              });
                if (results[0]) {
                   /* var add= results[0].formatted_address ;
                    var  value=add.split(",");

                    var count=value.length;
                    var country=value[count-1];
                    var state=value[count-2];
                    var city=value[count-3]; */
                    console.log("city name is: " + address.formatted_address);
                    this.inputGeoLocation.setValue(' ');
                    
                    this.inputGeoLocation.setValue(address.formatted_address);
                    
                }
                else  {
                    console.log("address not found");
                }
            }
            else {
                console.log("Geocoder failed due to: " + status);
                
            }
        }
    );
}

}
