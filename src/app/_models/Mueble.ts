import { Producto } from './Producto';

export interface Mueble{
    id:number;
    //nombre:string;
    //descripcion:string;
    id_tipo_mueble:number;
    id_tipo_linea:number;
    cantidad_puertas:number;
    cantidad_cajones:number;
    cantidad_estantes:number;
    alto:number;
    ancho:number;
    profundidad:number;
    tapizado:boolean;
    //Producto
    producto : Producto;
}