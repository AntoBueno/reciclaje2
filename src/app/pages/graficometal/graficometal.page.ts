
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from '@angular/common/http';
import { ApirestService } from 'src/app/servicios/apirest.service';
import {NavController, NavParams } from '@ionic/angular';
import {deposito_metales} from '../../datosapi/datosapi.models';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-graficometal',
  templateUrl: './graficometal.page.html',
  styleUrls: ['./graficometal.page.scss'],
})
export class GraficometalPage{
  @ViewChild('pieChart', {static: false}) pieChart;
  @ViewChild('pieChartValor', {static: false}) pieChartValor;
  public metales: Object
  hrzBars5: any
  bars: any;
  barsValor: any;
  largo: number
  colorArray: any;
  i:number
  public metalic = new Array();
  public datametal = new Array();
  public datadia = new Array();
  public datavol = new Array();
  public datalunes = new Array();
  public datamartes = new Array();
  public datamiercoles = new Array();
  public datajueves = new Array();
  public dataviernes = new Array();
  public datasabado = new Array();
  public datadomingo = new Array();
  public dataValor = new Array();

  constructor(
    private http: HttpClient, 
    public apiRest: ApirestService,
    public storage: Storage
  ) { }

  ionViewDidEnter() {
    this.generateColorArray(8);
    this.createpieChart();
  }
  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  fetchDataMetal() {
    this.apiRest.doVerMetal().subscribe((metal)=>{
      this.metales = metal;   
      console.log(metal);
      for(this.i = 0;this.i < metal.length ; this.i++ ){
        this.datadia[this.i] = metal[this.i].dia;
      }
      for(this.i = 0;this.i < metal.length ; this.i++ ){
        if(this.datadia[this.i] == "lunes"){
          this.datalunes[this.i] = metal[this.i].kilos;
          this.datavol[0] = this.datalunes.reduce((previous, current) => current += previous);
          this.dataValor[0] = (this.datavol[0] * 30);
        }
        else if(this.datadia[this.i] == "martes"){
          this.datamartes[this.i] = metal[this.i].kilos;
          this.datavol[1] = this.datamartes.reduce((previous, current) => current += previous);
          this.dataValor[1] = (this.datavol[1] * 30);
        }
        else if(this.datadia[this.i] == "miercoles"){
          this.datamiercoles[this.i] = metal[this.i].kilos;
          this.datavol[2] = this.datamiercoles.reduce((previous, current) => current += previous);
          this.dataValor[2] = (this.datavol[2] * 30);
        }
        else if(this.datadia[this.i] == "jueves"){
          this.datajueves[this.i] = metal[this.i].kilos;
          this.datavol[3] = this.datajueves.reduce((previous, current) => current += previous);
          this.dataValor[3] = (this.datavol[3] * 30);
        }
        else if(this.datadia[this.i] == "viernes"){
          this.dataviernes[this.i] = metal[this.i].kilos;
          this.datavol[4] = this.dataviernes.reduce((previous, current) => current += previous);
          this.dataValor[4] = (this.datavol[4] * 30);
        }
        else if(this.datadia[this.i] == "sabado"){
          this.datasabado[this.i] = metal[this.i].kilos;
          this.datavol[5] = this.datasabado.reduce((previous, current) => current += previous);
          this.dataValor[5] = (this.datavol[5] * 30);
        }
        else if(this.datadia[this.i] == "domingo"){
          this.datadomingo[this.i] = metal[this.i].kilos;
          this.datavol[6] = this.datadomingo.reduce((previous, current) => current += previous);
          this.dataValor[6] = (this.datavol[6] * 30);
        }
      }
      console.log(this.datavol)
      this.createpieChart();
      this.createpieChartValor();
    })

  }

  createpieChart() {
    this.bars = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"],
        datasets: [{
          label: 'Viewers in millions',
          data: this.datavol,
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }

  createpieChartValor() {
    this.barsValor = new Chart(this.pieChartValor.nativeElement, {
      type: 'pie',
      data: {
        labels: ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"],
        datasets: [{
          label: 'Viewers in millions',
          data: this.dataValor,
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
    });
  }
    
}