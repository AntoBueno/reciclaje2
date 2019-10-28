

export interface datosplasticos{
    id: number
    cantidad: number
    dia: string
    fecha: Date
}

export class datosplasticos{
    id:number
    cantidad: number
    dia: string
    fecha: Date
    constructor(datos?: datosplasticos){
        if(datos != null ){
            this.id=datos.id
            this.cantidad=datos.cantidad
            this.dia=datos.dia
            this.fecha=datos.fecha
            return
        }
            this.id=this.id
            this.cantidad=this.cantidad
            this.dia=this.dia
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