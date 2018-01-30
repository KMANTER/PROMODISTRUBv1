import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService';

@Component({
  selector: 'mylist-page',
  templateUrl: './mylist-page.html',
  styleUrls: ['./mylist-page.css']
})
export class MylistPage {
  constructor(public authService: AuthService){
  }
  ngOnInit() {

  }

}
