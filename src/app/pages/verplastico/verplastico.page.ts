import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';
import { datosplasticos } from 'src/app/datosapi/datosapi.models';
import { FiltroPipe } from '../../pipes/filtro.pipe';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-verplastico',
  templateUrl: './verplastico.page.html',
  styleUrls: ['./verplastico.page.scss'],
})
export class VerplasticoPage {

  
  public  datosplasticos = new Array();
  textoBuscar = '';
  
  constructor(
    public apiServices: ApirestService,
    public storage: Storage,
    public route: Router
  ) {
    this.apiServices.doVerPlastico().subscribe(plasticos =>{
      this.datosplasticos = plasticos; 
      console.log(plasticos);
   },error=>{
   console.log("errorrrrrrr") }) 
   }

  ngOnInit() {}

  buscarDia( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
  //<ion-button  color="light" size="small" (click)="goEditarPlastico(datosplasticos)" >Editar</ion-button> 
  // goEditarPlastico(plasticos: datosplasticos){   
  //   this.storage.set('datosplasticos',plasticos)
  //   this.storage.get('datosplasticos').then((val) => {
  //   });
  //   this.route.navigateByUrl("/editarplastico")} 
  
  goEliminarplastico(id_plasticos:number){
    this.apiServices.doEliminarPlasticos(id_plasticos).subscribe(data=>{
      alert("Datos eliminados")
      console.log(id_plasticos) 
      this.ngOnInit();
    },error=>{ 
     console.log('errrooooooorrrr')  
    })
  }
 

}
