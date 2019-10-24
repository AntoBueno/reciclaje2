import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/servicios/apirest.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.page.html',
  styleUrls: ['./metal.page.scss'],
})
export class MetalPage implements OnInit {
  metales: Object
  constructor(
    private apiServices: ApirestService
    ) {}

  ngOnInit() {
    this.apiServices.doVerMetal().subscribe((metales)=>{
      this.metales = metales; 
      console.log(metales);
   },error=>{
   console.log("errorrrrrrr") })
    
  }

}
