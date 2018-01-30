import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Product } from '../../modeles/product';
import {SimpleTimer} from 'ng2-simple-timer';
import { ActivatedRoute  } from '@angular/router';
import {SearchServices} from '../../services/searchServices';

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
  counterSec = 60;
	counterMin = 56;
	counterHour = 20;
	counterDay = 2;
  timerSecId: string;
  timerMinId: string;
  timerHourId: string;
  timerDayId: string;
  
  constructor(private st: SimpleTimer, private route: ActivatedRoute,
    private searchServices: SearchServices) { 
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.product = this.searchServices.getProductById(this.id);
        window.scrollTo(0, 0);
      });
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



  }
  ngOnDestroy(){
    this.sub.unsubscribe();
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
        if(this.counterSec === 0){
          this.counterSec = 60;
        }
        this.counterSec--;
      }break;
      case "min": {
        if(this.counterMin === 0){
          this.counterMin = 60;
        }
        this.counterMin--;
      }break;
      case "hour": {
        if(this.counterHour === 0){
          this.counterHour = 24;
        }
        this.counterHour--;
      }break;
      case "day": {
        if(this.counterDay === 0){
          this.counterDay = 30;
        }
        this.counterDay--;
      }break;
    }

  }
  

}
