import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Product } from '../../modeles/product';
import {SimpleTimer} from 'ng2-simple-timer';
import { SearchServices } from '../../services/searchServices';
import { Counter } from '../../modeles/counter';

@Component({
  selector: 'item-product-component',
  templateUrl: './item-product-component.html',
  styleUrls: ['./item-product-component.css']
})

export class ItemProductComponent implements OnInit {
  @Input('isGridMode') gridMode: boolean; 
  @Input() product: Product;
  timerSecId: string;
  timerMinId: string;
  timerHourId: string;
  timerDayId: string;
  private counter: Counter;
  constructor(private st: SimpleTimer, private searchServices: SearchServices) { 
  }

	ngOnInit() {
    this.counter = this.setTimer(this.product.endPromoDate);
		this.st.newTimer('1sec',1);
		this.st.newTimer('1min',60);
		this.st.newTimer('1hour',3600);
		this.st.newTimer('1day',86400);
		this.subscribeTimerSec();
		this.subscribeTimerMin();
		this.subscribeTimerHour();
		this.subscribeTimerDay();
    
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
	/*delAllTimer() {
		this.st.delTimer('1sec');
		this.st.delTimer('5sec');
		this.st.delTimer('10sec');
	}*/

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
  

}
