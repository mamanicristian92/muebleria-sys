export interface Producto{
    id:number;
    nombre:string;
    descripcion:string;
    cantidad: number;
    cantidad_minima: number;
    precio: number;
    precio_lista: number;
    fotos:ProductoFoto[];
}
export interface ProductoFoto{
    id:number;
    nombre:string;
    created_at:Date;
}