import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() isLoggedIn: boolean;  
  private serviceAuth: AuthService;  
  constructor(private auth: AuthService){
    this.serviceAuth = auth;    
    console.log("je suis connecté ? > "+auth.isAuth);
  }

  private setSession() {
    console.log("je me connecte");    
    this.serviceAuth.isAuth = true;
  }
}
