import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';

@Component({
  selector: 'app-verplastico',
  templateUrl: './verplastico.page.html',
  styleUrls: ['./verplastico.page.scss'],
})
export class VerplasticoPage implements OnInit {
  public plasticos: Object
  
  constructor(
    public apiServices: ApirestService
  ) { }

  ngOnInit() {
    this.apiServices.doVerPlastico().subscribe((plasticos)=>{
      this.plasticos = plasticos; 
      console.log(plasticos);
   },error=>{
   console.log("errorrrrrrr") })
    
  }
  
  goEliminarplastico(id_plasticos:number){
    this.apiServices.doEliminarPlasticos(id_plasticos).subscribe(data=>{
      alert("Interconsulta eliminada")
      console.log(id_plasticos) 
      this.ngOnInit();
    },error=>{ 
     console.log('errrooooooorrrr')  
    })
  }
}
