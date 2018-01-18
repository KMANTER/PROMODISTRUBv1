import { Component } from '@angular/core';
import {AuthService} from '../../services/authService'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  options = [
    'One',
    'Two',
    'Three'
  ];
  myControl: FormControl = new FormControl();  
  constructor(public authService: AuthService){
  }
  ngOnInit() {
    console.log("l'utilisateur est connecté ? "+ this.authService.isLoggedIn());
  }
    
}
