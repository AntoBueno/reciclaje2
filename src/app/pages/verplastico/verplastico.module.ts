import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerplasticoPage } from './verplastico.page';


const routes: Routes = [
  {
    path: '',
    component: VerplasticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [VerplasticoPage]
})
export class VerplasticoPageModule {}
