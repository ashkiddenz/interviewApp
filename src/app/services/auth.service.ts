import { Subject } from 'rxjs';
import { Admin } from '../models/admin.model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:Admin=new Admin('','')
  users:Admin[] = [] ;
  isLoggedIn:boolean=false;

  constructor() {}

//Before creating another fake user in local storage
  checkUser():boolean{
    if(this.getUser()){
      return true
    }
    return false;
  }

  getUser(email?:string) {
    const localDb = localStorage.getItem('uzers');
    if (localDb) {
      this.users = JSON.parse(localDb);
      const user = this.users.find(value=>value.email===email);
      if(user){
        this.user= user;
      }
      return user;
    }
    console.log('No user exists in database')
    return null;
  }

  isAuthenticated():boolean {
    const dbState = localStorage.getItem('isLoggedIn');
    if(dbState){
      this.isLoggedIn=JSON.parse(dbState);
      return this.isLoggedIn?true:false;
    }
    return false;
  }


  isAdmin(){
     const userString = localStorage.getItem('currentUser');
     if(userString){
      console.log('in the loop')
      console.log('userString=',userString);
      const role = userString;
      if(role.includes('Admin')){
        console.log('Returning a boolean after login - true')
       return true;
      } else {
        console.log('Returning a boolean after login - false')
        return false;
      }

     }
      console.log("Returning boolean before login")
      console.log(this.user.isAdmin);
      return this.user.isAdmin ;
  }


   authenticate(email?:string,password?:string):boolean{
     if(email){
      this.getUser(email);
     }
    if(email===this.user.email && password===this.user.password ){
      console.log('Email and Password Matched')
      const currentUser = this.isAdmin() ? 'Admin':'Student';
      console.log("Current User",currentUser);
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
      localStorage.setItem('currentUser',JSON.stringify(currentUser));
      localStorage.setItem('username',JSON.stringify(this.user.firstName))
      return true;
    } else {
      console.log('Email or Password is Incorrect');
      return false;
    }

  }



}
