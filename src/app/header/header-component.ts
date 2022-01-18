import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { Admin } from './../models/admin.model';
import { Component,OnChanges,OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header-component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit,OnChanges {
   adminExists:boolean=true;
   isLoggedIn:boolean=false;
   constructor(private authService:AuthService,private router:Router){

   }

   ngOnInit() {

    console.log('Header init fired')
   }

   ngOnChanges(){
       console.log('header onchanges fired');
   }

checkIsLoggedIn () {
  // console.log('ui function')
  return this.authService.isLoggedIn;
}

  // create(){
  //   this.adminExists=this.authService.checkUser();
  //   if(this.adminExists){
  //     this.adminExists=false;
  //     return
  //   }
  //     const admin = new Admin('ashleycolaco3@gmail.com','codemax','Ashley','Colaco',true);
  //     localStorage.setItem('users',JSON.stringify(admin));
  //     console.log('Admin Created')
  // }

  logout(){
    // localStorage.setItem('isLoggedIn',JSON.stringify(false));
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    this.authService.isLoggedIn=false;
    this.router.navigate(['login']);
  }

}
