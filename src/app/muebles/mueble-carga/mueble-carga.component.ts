import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators, FormGroup } from '@angular/forms';
import { Mueble } from '../../_models/Mueble';
import { MuebleService } from '../../_service/mueble.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoMuebleService } from '../../_service/tipo.mueble.service';
import { TipoMueble } from '../../_models/TipoMueble';
import { Producto } from '../../_models/Producto';

@Component({
  selector: 'app-mueble-carga',
  templateUrl: './mueble-carga.component.html',
  styleUrls: ['./mueble-carga.component.scss']
})
export class MuebleCargaComponent implements OnInit {

  id_mueble:number;
  formulario:FormGroup;
  tiposMuebles:TipoMueble[];

  constructor(
    private fb:FormBuilder,
    private muebleService:MuebleService,
    private tipoMuebleService: TipoMuebleService,
    private route: ActivatedRoute,
    private router:Router,
  ) {
    
   }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      descripcion:'',
      id_tipo_mueble:'',
      id_tipo_linea:'',
      cantidad_puertas:'',
      cantidad_cajones:'',
      cantidad_estantes:'',
      alto:'',
      ancho:'',
      profundidad:'',
      tapizado:'',
    });
    this.tipoMuebleService.getAll().subscribe(response=>{
      this.tiposMuebles=response;
    });
    this.route.params.subscribe(params=>{
      let id = params['id_mueble'];
      if(id){
        this.id_mueble = +id;

        this.muebleService.getBy(this.id_mueble).subscribe(response=>{
          this.formulario.controls.nombre.setValue(response.producto.nombre);
          this.formulario.controls.descripcion.setValue(response.producto.descripcion);
          this.formulario.controls.cantidad_puertas.setValue(response.cantidad_puertas);
          this.formulario.controls.cantidad_cajones.setValue(response.cantidad_cajones);
          this.formulario.controls.cantidad_estantes.setValue(response.cantidad_estantes);
          this.formulario.controls.alto.setValue(response.alto);
          this.formulario.controls.ancho.setValue(response.ancho);
          this.formulario.controls.profundidad.setValue(response.profundidad);
          this.formulario.controls.tapizado.setValue(response.tapizado);
        });
      } else {
        this.id_mueble = 0;
      }
    });
  }

  confirmar(){
    if(!this.formulario.valid){
      return;
    }
    let item = <Mueble>{};
    let prod = <Producto>{};
    item.id=this.id_mueble;
    prod.nombre=this.formulario.controls.nombre.value;
    prod.descripcion=this.formulario.controls.descripcion.value;
    
    item.id_tipo_mueble= this.formulario.controls.descripcion.value;
    item.cantidad_puertas=this.formulario.controls.cantidad_puertas.value;
    item.cantidad_cajones=this.formulario.controls.cantidad_cajones.value;
    item.cantidad_estantes=this.formulario.controls.cantidad_estantes.value;
    item.alto=this.formulario.controls.alto.value;
    item.ancho=this.formulario.controls.ancho.value;
    item.profundidad=this.formulario.controls.profundidad.value;
    if (this.id_mueble==0) {
      this.muebleService.store(item,prod).subscribe(response=>{
        this.router.navigate(['/']);
      });
    }
    else {
      this.muebleService.update(item,prod).subscribe(response=>{
        this.router.navigate(['/']);
      })
    }
  }
}
