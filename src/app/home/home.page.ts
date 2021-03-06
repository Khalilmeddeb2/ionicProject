import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
email :string;
password :string;
form;
  constructor(private authService: AuthService,private router:Router,private builder: FormBuilder) {
    this.form = this.builder.group({
      email: [''],
      password: ['']
    })
  }
  login()
  {
    
   this.authService.login(this.form.value.email, this.form.value.password).then(() => {
     console.log("fr")
     //console.log(this.form.value.email)
    this.router.navigateByUrl('/tache')

   })
  }
}
