import { Subject } from 'rxjs';
import { Admin } from '../models/admin.model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user = new Admin('', '');
  isLoggedIn:boolean=false;

  constructor() {}

  checkUser():boolean{
    if(this.getUser()){
      return true
    }
    return false;
  }

  getUser() {
    const localDb = localStorage.getItem('users');
    if (localDb) {
      const user = JSON.parse(localDb);
      return this.user = user;
    }
    console.log('No user exists in database')
    return null;
  }

  isAuthenticated() {
    const dbState = localStorage.getItem('isLoggedIn');
    if(dbState){
      this.isLoggedIn=JSON.parse(dbState);
      return true;
    }
    this.isLoggedIn=false;
    return false;
  }

   authenticate(email?:string,password?:string):boolean{
    const dbAdmin:Admin= this.getUser();
    console.log(dbAdmin.email,dbAdmin.password)
    console.log(email,password)

    if(email===dbAdmin.email && password===dbAdmin.password ){
      console.log('Email and Password Matched')
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
      return true;
    } else {
      console.log('Email or Password is Incorrect');
      return false;
    }
  }

  // login(username: string, password: string) {
  //   return this.apiService.login(username, password).pipe(
  //     tap((response: any) => {
  //       this._isLoggedIn$.next(true);
  //       localStorage.setItem(this.TOKEN_NAME, response.token);
  //       this.user = this.getUser(response.token);
  //     })
  //   );
  // }

  // private getUser(token: string): UserModel | null {
  //   if (!token) {
  //     return null
  //   }
  //   return JSON.parse(atob(token.split('.')[1])) as UserModel;
  // }
}
