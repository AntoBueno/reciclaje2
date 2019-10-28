import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  pages = [
    {
      title: 'Grafico Plastico',
      url: '/menu/grafico'
    },
    {
      title: 'Grafico Metal',
      url: '/menu/graficometal'
    },
    {
      title: 'Agregar Plastico',
      url: '/menu/plastico'
    },
    {
      title: 'Ver plastico',
      url: '/menu/verplastico'
    },
    {
      title: 'Ver Metal',
      url: '/menu/metal'
    },
    {
      title: 'Ver Vidrio',
      url: '/menu/vidrio'
    }
    
  ];

  selectedPath = '';

  constructor(
    private route: Router
  ) {
    this.route.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
