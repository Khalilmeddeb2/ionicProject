import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachePageRoutingModule } from './tache-routing.module';

import { TachePage } from './tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TachePageRoutingModule
  ],
  declarations: [TachePage]
})
export class TachePageModule {}
