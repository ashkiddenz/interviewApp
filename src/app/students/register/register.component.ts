import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarItemComponent } from 'src/app/components/snackbar-item/snackbar-item.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({});

  constructor(private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  get f(){
    return this.registerForm.controls;
  }


  submitForm(){
   const users = localStorage.getItem('uzers');
   let usersArray:Admin[] = [] ;
   if(users){
     usersArray = JSON.parse(users);
   }
   const user = new Admin(this.f.email.value,this.f.password.value,this.f.firstName.value,this.f.secondName.value,false);
    const userExists:boolean = this.duplicateUserCheck(user,usersArray);

     if(userExists){
         this.openSnackBar('User Exists Already !!');
     } else {
       usersArray.push(user);
       localStorage.setItem('uzers',JSON.stringify(usersArray));
       this.openSnackBar('User Registered Successfully');
       this.router.navigate(['../']);
     }

  }

  initForm(){
    this.registerForm = new FormGroup({
      firstName : new FormControl(null,Validators.required),
     secondName : new FormControl(null,Validators.required),
          email : new FormControl(null,[Validators.required,Validators.email]),
       password : new FormControl(null,Validators.required)
    });
  }


  duplicateUserCheck(userEntered:Admin,usersArray:Admin[]){
      return usersArray.find(user=>user.email===userEntered.email)?true:false;
  }

  openSnackBar(message:string) {
    this.snackbar.openFromComponent(SnackbarItemComponent,{
      data:message,
      duration:2000
    })
  }

}
