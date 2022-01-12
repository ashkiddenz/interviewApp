import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  switchLogin() {
    this.isLoginMode = !this.isLoginMode;
  }


  authForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  email = this.authForm.get('email')?.value;
  password = this.authForm.get('password')?.value;


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  submitForm() {
    if (this.authForm.invalid) {
      alert('Please enter valid email and password')
      return
    }
    console.log("Form Valid", this.authForm.value);

  }

}
