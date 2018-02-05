import { Component, OnInit, Input, OnDestroy, ViewContainerRef  } from '@angular/core';
import {Location} from '@angular/common';
import {FormControl} from '@angular/forms';
import { Product } from '../../modeles/product';
import {SimpleTimer} from 'ng2-simple-timer';
import { ActivatedRoute  } from '@angular/router';
import {SearchServices} from '../../services/searchServices';
import { MylistServices } from '../../services/myListService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Counter } from '../../modeles/counter';

@Component({
  selector: 'product-details-component',
  templateUrl: './product-details-component.html',
  styleUrls: ['./product-details-component.css']
})

export  class productDetailsComponent implements OnInit, OnDestroy {
 //id produit
  id: number;
  product: Product;
  sub: any;
  items1: number[] = [1, 2, 3, 4, 5];
  testimgFournisseur: string

  timerSecId: string;
  timerMinId: string;
  timerHourId: string;
  timerDayId: string;
  isSupplTabActive: boolean;
  isDescTabActive: boolean;
  isRecetteTabActive: boolean;
  private quantity: number;
  private counter: Counter;
  constructor(private st: SimpleTimer, private route: ActivatedRoute,
    private searchServices: SearchServices, private mylistServices: MylistServices, private _location: Location,
    public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.product = this.searchServices.getProductById(this.id);
        window.scrollTo(0, 0);
      });
      this.isSupplTabActive = false;
      this.isDescTabActive = true;
      this.isRecetteTabActive = false;
      this.quantity = 1;
      this.toastr.setRootViewContainerRef(vcr);
  }

	ngOnInit() {
		this.st.newTimer('1sec',1);
		this.st.newTimer('1min',60);
		this.st.newTimer('1hour',3600);
		this.st.newTimer('1day',86400);
		this.subscribeTimerSec();
		this.subscribeTimerMin();
		this.subscribeTimerHour();
    this.subscribeTimerDay();
    this.counter = this.setTimer(this.product.endPromoDate);
  }
  setTimer(dateEndPromo: string): Counter{
    var datePromo: Date = new Date(dateEndPromo);
    var dateNow = new Date();
    var seconds = Math.floor((datePromo.getTime() - (dateNow.getTime()))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    //console.log("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
    return new Counter(seconds, minutes, hours, days);
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
	/*delAllTimer() {
		this.st.delTimer('1sec');
		this.st.delTimer('5sec');
		this.st.delTimer('10sec');
	}*/
  public addToMyList(p: Product){
    console.log("quantité "+this.quantity)
    this.mylistServices.addToMyList(p,this.quantity);
    this.showSuccess();
  }
  showSuccess() {
    this.toastr.info('', 'Produit ajouté à ma liste.', { toastLife:2000, showCloseButton: true,animate:'flyRight'});
  }
  decrQty(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
  incrQty(){
    this.quantity++;
  }
	subscribeTimerSec() {
    if (this.timerSecId) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timerSecId);
			this.timerSecId = undefined;
		} else{
      this.timerSecId = this.st.subscribe('1sec', () => this.timerCallback("sec"));      
    }
  }
  subscribeTimerMin() {
    if (this.timerMinId) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timerMinId);
			this.timerMinId = undefined;
		} else{
      this.timerMinId = this.st.subscribe('1min', () => this.timerCallback("min"));
    }
  }
  subscribeTimerHour() {
    if (this.timerHourId) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timerHourId);
			this.timerHourId = undefined;
		} else{
      this.timerHourId = this.st.subscribe('1hour', () => this.timerCallback("hour"));
    }
  }
  subscribeTimerDay() {
    if (this.timerDayId) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timerDayId);
			this.timerDayId = undefined;
		} else{
      this.timerDayId = this.st.subscribe('1day', () => this.timerCallback("day"));
    }
	}

	timerCallback(option: string) {
    switch(option){
      case "sec": {
        if(this.counter.counterSec === 0){
          this.counter.counterSec = 60;
        }
        this.counter.counterSec--;
      }break;
      case "min": {
        if(this.counter.counterMin === 0){
          this.counter.counterMin = 60;
        }
        this.counter.counterMin--;
      }break;
      case "hour": {
        if(this.counter.counterHour === 0){
          this.counter.counterHour = 24;
        }
        this.counter.counterHour--;
      }break;
      case "day": {
        if(this.counter.counterDay === 0){
          this.counter.counterDay = 30;
        }
        this.counter.counterDay--;
      }break;
    }

  }
  
  public backPage(){
    this._location.back();
  }
  scroll(element) {
    this.isSupplTabActive = true;
    this.isDescTabActive = false;
    this.isRecetteTabActive = false;
    window.scrollTo(element.getBoundingClientRect().x, element.getBoundingClientRect().y - 100);
}
}
