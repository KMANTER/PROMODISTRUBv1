
export class Counter {
  counterSec: number;
	counterMin: number;
	counterHour: number;
  counterDay: number;
  constructor(counterSec, counterMin, counterHour, counterDay){
    this.counterSec = counterSec + 1;
    this.counterMin = counterMin + 1;
    this.counterHour = counterHour + 1;
    this.counterDay = counterDay + 1;
  }
}
