import { Component } from '@angular/core';
import { AuthService } from '../../services/authService'
import { Router } from '@angular/router';
@Component({
  selector: 'under-construction-page',
  templateUrl: './under-construction-page.html',
  styleUrls: ['./under-construction-page.css']
})
export class UnderConstructionPage {
  password: string ;
  error:  string;
  constructor(private authService: AuthService, private router: Router){
    this.password = "";
  }
  login(){
    if(this.password === "*promodistrub-2018/fr_"){
      this.authService.addSession("promodistrubadm");
      this.router.navigate(['/accueil']);
    }else{
      this.error = "mot de passe incorrect!";
      this.password = "";
    }
  }
}

