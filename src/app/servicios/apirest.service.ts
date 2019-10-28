import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {delay} from 'rxjs/operators';
import { datosplasticos, deposito_metales } from '../datosapi/datosapi.models';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(
    public http: HttpClient
  ) { }

  doAgregarPlastico(datosplasticos: datosplasticos): Observable<any>{
    return this.http.post<any>("http://104.198.56.154:3000/datosplasticos",datosplasticos)
  } 
  doVerPlastico(): Observable <datosplasticos[]> {
    return this.http.get<datosplasticos[]>("http://104.198.56.154:3000/datosplasticos").pipe(
      delay( 2500 )
    );
  }
  doEliminarPlasticos(datosplasticos:number):Observable<any>{
    return this.http.delete<datosplasticos[]>("http://104.198.56.154:3000/datosplasticos/" + datosplasticos)
  }

  doEditarPlastico(datosplasticos:datosplasticos, id:string):Observable<any>{
    return this.http.patch<any>("http://104.198.56.154:3000/datosplasticos/"+id,datosplasticos)
  }
  doVerMetal(): Observable <deposito_metales[]> {
    return this.http.get<deposito_metales[]>("http://35.193.42.58:3000/deposito_metales")
  }
  doVerVidrio(): Observable <[]> {
    return this.http.get<[]>("")
  }

  
}