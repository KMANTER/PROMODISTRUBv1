import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingComponentComponent {
  title = 'PROMODISTRUB';
  constructor(public authService: AuthService){
  }
  ngOnInit() {
    this.authService.clearSession();
  }

}
