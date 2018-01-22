import { Component } from '@angular/core';
import {AuthService} from '../../services/authService'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  host: {
      '(window:scroll)': 'updateHeader($event)'
  }
})
export class HeaderComponent {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 80;
  constructor(public authService: AuthService){
  }
  ngOnInit() {
    console.log("l'utilisateur est connecté ? "+ this.authService.isLoggedIn());
  }
  
  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }  
}
