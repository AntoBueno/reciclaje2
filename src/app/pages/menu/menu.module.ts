import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
        { path: 'grafico', loadChildren: '../grafico/grafico.module#GraficoPageModule' },
        { path: 'plastico', loadChildren: '../plastico/plastico.module#PlasticoPageModule' },
        { path: 'metal', loadChildren: '../metal/metal.module#MetalPageModule' },
        { path: 'vidrio', loadChildren: '../vidrio/vidrio.module#VidrioPageModule' },
        { path: 'graficometal', loadChildren: '../graficometal/graficometal.module#GraficometalPageModule' },
        { path: 'verplastico', loadChildren: '../verplastico/verplastico.module#VerplasticoPageModule' }
       
    ]
  },
  {
    path:'',
    redirectTo: '/menu/grafico'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
