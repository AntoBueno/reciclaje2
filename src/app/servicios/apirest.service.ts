import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { datosplasticos, deposito_metales } from '../datosapi/datosapi.models';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(
    public http: HttpClient
  ) { }

  doAgregarPlastico(datosplasticos: datosplasticos): Observable<any>{
    return this.http.post<any>("http://localhost:3000/datosplasticos",datosplasticos)
  } 
  doVerPlastico(): Observable <datosplasticos[]> {
    return this.http.get<datosplasticos[]>("http://localhost:3000/datosplasticos")
  }
  doEliminarPlasticos(datosplasticos:number):Observable<any>{
    return this.http.delete<datosplasticos[]>("http://localhost:3000/datosplasticos/" + datosplasticos)
  }


  doVerMetal(): Observable <deposito_metales[]> {
    return this.http.get<deposito_metales[]>("")
  }
  doVerVidrio(): Observable <[]> {
    return this.http.get<[]>("")
  }
}