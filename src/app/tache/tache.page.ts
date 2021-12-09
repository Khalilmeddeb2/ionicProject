import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {
checked = false;
date=Date.now();
show=false;
addForm;
userId;
taches = []
  constructor(private formBuilder:FormBuilder,private tacheService:TacheService, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      title:['']
    })
    this.auth.authState.subscribe(
      r=>{
        console.log(r)
        // @ts-ignore
         this.userId=r.multiFactor?.user?.uid
         this.tacheService.getTaches(this.userId).subscribe(t => this.taches = t)
       })
  }

  check(checked, key) {
    this.tacheService.check(!checked, key);
    this.checked = !this.checked;
  }

  add()
  {
    this.show=!this.show;
    
  }
   
  onAdd(){
    this.tacheService.add(this.userId, this.addForm.value.title)
    this.show=false;
  }

}
