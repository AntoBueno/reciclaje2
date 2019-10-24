import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }
  
  openMenu(){
    this.menuCtrl.toggle();
  }

}
