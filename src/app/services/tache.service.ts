import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
tacheId=0;
userID;
  constructor(private dataBase:AngularFireDatabase,private auth:AngularFireAuth) {
    
   }

  add(userId, title)
  {
    const date=Date.now()
    return this.dataBase.database.ref().child("/taches/"+date).set({title,date,userId, checked: false})
  }

  getTaches(userId)
  {
    return this.dataBase.list("taches",ref=>ref.orderByChild('userId').equalTo(userId)).valueChanges()
  }

  check(etat, key) {
    return this.dataBase.list('taches').update(String(key), {checked: etat})
  }
}
