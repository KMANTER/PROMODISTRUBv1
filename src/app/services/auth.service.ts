import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public isAuth: boolean;
  constructor() {
    this.isAuth = false;
   }

}
