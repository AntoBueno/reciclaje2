import { Pipe, PipeTransform } from '@angular/core';
import { datosplasticos } from '../datosapi/datosapi.models';
import { VerplasticoPage } from "../pages/verplastico/verplastico.page";

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(plastic: datosplasticos[], texto: string): datosplasticos[] {

    if ( texto.length === 0 ){ return plastic; }
    
        texto = texto.toLocaleLowerCase()

    return plastic.filter( datosplasticos => {
          return datosplasticos.dia.toLocaleLowerCase().includes(texto)
          || datosplasticos.fecha.toLocaleDateString().includes(texto);
    })
    
  }

}
