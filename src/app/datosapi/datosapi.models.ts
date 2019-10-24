import { DatetimeOptions } from '@ionic/core'

export interface datosplasticos{
    cantidad: number
    fecha: Date
}

export class datosplasticos{
    cantidad: number
    fecha: Date
    constructor(datos?: datosplasticos){
        if(datos != null ){
            this.cantidad=datos.cantidad
            this.fecha=datos.fecha
            return
        }
            this.cantidad=this.cantidad
            this.fecha=this.fecha
            return
    }
}

export interface deposito_metales{
    kilos: number
    dia: string
    fecha_ingreso: Date
}

export class deposito_metales{
    kilos: number
    dia: string
    fecha_ingreso: Date
    constructor(datos?: deposito_metales){
        if(datos != null ){
            this.kilos=datos.kilos
            this.dia=datos.dia
            this.fecha_ingreso=datos.fecha_ingreso
            return
        }
            this.kilos=this.kilos
            this.dia=this.dia
            this.fecha_ingreso=this.fecha_ingreso
            return
    }
}