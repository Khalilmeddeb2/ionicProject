import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
  email :string;
password :string;
form;
  constructor(private authService: AuthService,private router:Router,private builder: FormBuilder) {
    this.form = this.builder.group({
      email: [''],
      password: ['']
    })
  }
  
  signUp()
  {
    
   this.authService.signUp(this.form.value.email, this.form.value.password).then(() => {
     console.log("fr")
     //console.log(this.form.value.email)
    this.router.navigateByUrl('/home')

   })
  }
}
