import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  addSession(session: any){
    localStorage.clear();    
    localStorage.setItem("currentUser",session);
  }
  clearSession(){
    localStorage.clear();
  }
  isLoggedIn():boolean{
    return localStorage.getItem("currentUser") !== null ;
  }
}
