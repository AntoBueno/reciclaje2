import { Component, OnInit } from '@angular/core';
import { datosplasticos } from 'src/app/datosapi/datosapi.models';
import { Router } from '@angular/router';
import { ApirestService } from 'src/app/servicios/apirest.service';

@Component({
  selector: 'app-plastico',
  templateUrl: './plastico.page.html',
  styleUrls: ['./plastico.page.scss'],
})
export class PlasticoPage implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';
  datosplasticos:datosplasticos = new datosplasticos();

  constructor(
    private apiRest: ApirestService,
    private route: Router
  ) { }

  goAgregarPlastico(){
    this.apiRest.doAgregarPlastico(this.datosplasticos).subscribe(res => {
      console.log("llego hasta aqui")
      this.route.navigateByUrl("/verplastico");
      alert('Se ha creado la plasticos exitosamente');
    }, err => {
     alert( "No se ha logrado registrar");
     
    })
  }

  ngOnInit() {
  }

}
