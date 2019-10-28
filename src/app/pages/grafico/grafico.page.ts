import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from '@angular/common/http';
import { ApirestService } from 'src/app/servicios/apirest.service';
import {NavController, NavParams } from '@ionic/angular';
import {datosplasticos} from '../../datosapi/datosapi.models';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage {
  @ViewChild('hrzBarChart6', {static: false}) hrzBarChart6;
  @ViewChild('hrzBarChartValor', {static:false}) hrzBarChartValor;
  public plasticos: Object
  hrzBars6: any;
  hrzBarValor: any;
  bars: any;
  largo: number
  colorArray: any;
  i:number
  public plastic = new Array();
  public dataplasticos = new Array();
  public datadia = new Array();
  public datavol = new Array();
  public datalunes = new Array();
  public datamartes = new Array();
  public datamiercoles = new Array();
  public datajueves = new Array();
  public dataviernes = new Array();
  public dataValor = new Array();

  constructor(
    private http: HttpClient, 
    public apiRest: ApirestService,
    
    public storage: Storage
    ) { }
  
  fetchDataPlastico() {
    this.apiRest.doVerPlastico().subscribe((plastico)=>{
      this.plasticos = plastico;   
      console.log(plastico);
      for(this.i = 0;this.i < plastico.length ; this.i++ ){
        this.datadia[this.i] = plastico[this.i].dia;
      }
      for(this.i = 0;this.i < plastico.length ; this.i++ ){
        if(this.datadia[this.i] == "lunes"){
          this.datalunes[this.i] = plastico[this.i].cantidad;
          this.datavol[0] = this.datalunes.reduce((previous, current) => current += previous);
          this.dataValor[0] = (this.datavol[0] * 40)
        }
        else if(this.datadia[this.i] == "martes"){
          this.datamartes[this.i] = plastico[this.i].cantidad;
          this.datavol[1] = this.datamartes.reduce((previous, current) => current += previous);
          this.dataValor[1] = (this.datavol[1] * 40)
        }
        else if(this.datadia[this.i] == "miercoles"){
          this.datamiercoles[this.i] = plastico[this.i].cantidad;
          this.datavol[2] = this.datamiercoles.reduce((previous, current) => current += previous);
          this.dataValor[2] = (this.datavol[2] * 40)
        }
        else if(this.datadia[this.i] == "jueves"){
          this.datajueves[this.i] = plastico[this.i].cantidad;
          this.datavol[3] = this.datajueves.reduce((previous, current) => current += previous);
          this.dataValor[3] = (this.datavol[3] * 40)
        }
        else if(this.datadia[this.i] == "viernes"){
          this.dataviernes[this.i] = plastico[this.i].cantidad;
          this.datavol[4] = this.dataviernes.reduce((previous, current) => current += previous);
          this.dataValor[4] = (this.datavol[4] * 40)
        }
      }
      console.log(this.datavol)
      this.createHrzBarChart6();
      this.createHrzBarValor();
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
          data: this.datavol,
          backgroundColor: 'rgb(92, 45, 173)', // array should have same number of elements as number of dataset
          hoverBackgroundColor: 'rgb(169, 137, 224)',
          borderColor: 'rgb(92, 45, 173)',// array should have same number of elements as number of dataset
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
              max: 1000,
                min: 0
            },
            stacked: true
          }]
        }
      }
    });
  }

  createHrzBarValor() {
    let ctx = this.hrzBarChartValor.nativeElement;
    this.hrzBarValor = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["lunes","martes","miercoles","jueves","viernes"],
        datasets: [{
          label: 'volumen total',
          data: this.dataValor,
          backgroundColor: 'rgb(227, 82, 162)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(	120, 120, 120)',// array should have same number of elements as number of dataset
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
              max: 35000,
                min: 0
            },
            stacked: true
          }]
        }
      }
    });
  }

}