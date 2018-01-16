import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {
  title = 'PROMODISTRUB';
  private serviceAuth: AuthService;
  constructor(private auth: AuthService){
    this.serviceAuth = auth;
  }
  ngOnInit() {
  }

}
