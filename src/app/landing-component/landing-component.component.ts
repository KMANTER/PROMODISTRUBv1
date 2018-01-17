import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent {
  title = 'PROMODISTRUB';
  constructor(public authService: AuthService){
  }
  ngOnInit() {
    this.authService.clearSession();
  }

}
