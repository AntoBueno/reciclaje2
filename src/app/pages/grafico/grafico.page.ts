
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from '@angular/common/http';
import { ApirestService } from 'src/app/servicios/apirest.service';
import {NavController, NavParams } from '@ionic/angular';
import {datosplasticos} from '../../datosapi/datosapi.models';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage {
  @ViewChild('hrzBarChart6', {static: false}) hrzBarChart6;
  public plasticos: Object
  hrzBars6: any;
  bars: any;
  plastico: any;
  colorArray: any;
  
  constructor(
    private http: HttpClient, 
    public apiRest: ApirestService
    ) { }

  fetchData() {
    this.apiRest.doVerPlastico().subscribe((plasticos)=>{
      this.plastico = plasticos; 
      console.log(plasticos);
      this.createHrzBarChart6();
    })
  }
 
  createHrzBarChart6() {
    let ctx = this.hrzBarChart6.nativeElement;
    this.hrzBars6 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["lunes","martes","miercoles","jueves","viernes"],
        datasets: [{
          label: 'volumen total',
          data: this.plastico.cantidad,
          backgroundColor: 'rgb(245, 229, 27)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(245, 229, 27)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 0.9,
            gridLines: {
              offsetGridLines: true
            },
            stacked: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 100,
                min: 0
            },
            stacked: true
          }]
        }
      }
    });
  }
}