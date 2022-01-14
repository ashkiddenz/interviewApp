import { Subject } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  failedAuthentication:boolean=false;

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  submitForm() {
    if (this.form.invalid) {
      alert('Please fill in the details correctly')
      return;
    }

    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;


    if(this.authService.authenticate(email,password)){
      this.router.navigate(['questions']);
    } else {
      console.log('Authentication Failed',this.authService.isLoggedIn);
      this.failedAuthentication = true;
    }


  }

}
