import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../../_models/Categoria';
import { ProductoService } from '../../_service/producto.service';
import { CategoriaService } from '../../_service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../_models/Producto';

@Component({
  selector: 'app-producto-carga',
  templateUrl: './producto-carga.component.html',
  styleUrls: ['./producto-carga.component.scss']
})
export class ProductoCargaComponent implements OnInit {

  id_producto;
  formulario:FormGroup;
  categorias:Categoria[];
  constructor(
    private fb:FormBuilder,
    private productoService:ProductoService,
    private categoriaService:CategoriaService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      descripcion:'',
      id_categoria:'',

      cantidad:'',
      cantidad_minima:'',
      precio:'',
      precio_lista:'',

    });
    this.categoriaService.getAll().subscribe(response=>{
      this.categorias
    });
    this.route.params.subscribe(params=>{
      let id = params['id_producto'];
    })
  }
  confirmar(){
    if(!this.formulario.valid){
      return;
    }
    let item = <Producto>{};
    item.nombre = this.formulario.controls.nombre.value;
    item.descripcion = this.formulario.controls.descripcion.value;
    //item.id_tipo_mueble= this.formulario.controls.descripcion.value;
 
    item.cantidad = this.formulario.controls.cantidad.value;
    item.cantidad_minima = this.formulario.controls.cantidad_minima.value;
    item.precio = this.formulario.controls.precio.value;
    item.precio_lista = this.formulario.controls.precio_lista.value;

    this.productoService.store(item).subscribe(response=>{
      this.router.navigate(['/']);
    });
  }

}

/*

export class MuebleCargaComponent implements OnInit {

  confirmar(){
    if(!this.formulario.valid){
      return;
    }
    let item = <Mueble>{};
    item.nombre = this.formulario.controls.nombre.value;
    item.descripcion = this.formulario.controls.descripcion.value;
    item.id_tipo_mueble= this.formulario.controls.descripcion.value;
    
    this.muebleService.store(item).subscribe(response=>{
      this.router.navigate(['/']);
    });

  }
  ngOnInit() {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      descripcion:'',
      id_tipo_mueble:'',

    });
    this.tipoMuebleService.getAll().subscribe(response=>{
      this.tiposMuebles=response;
    });
    this.route.params.subscribe(params=>{
      let id = params['id_mueble'];
      if(id){
        this.id_mueble = +id;

        this.muebleService.getBy(this.id_mueble).subscribe(response=>{
          this.formulario.controls.nombre.setValue(response.nombre);
          this.formulario.controls.descripcion.setValue(response.descripcion);
        });
      } else {
        this.id_mueble = 0;
      }
    });
  }

  
}
*/