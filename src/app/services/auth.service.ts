import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }
  signUp(email ,password)
  {
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email, password)
  {
    //console.log(email)
    return this.angularFireAuth.signInWithEmailAndPassword(email,password)
  }
}
