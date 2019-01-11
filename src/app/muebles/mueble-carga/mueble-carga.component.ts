import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators, FormGroup } from '@angular/forms';
import { Mueble } from '../../_models/Mueble';
import { MuebleService } from '../../_service/mueble.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mueble-carga',
  templateUrl: './mueble-carga.component.html',
  styleUrls: ['./mueble-carga.component.scss']
})
export class MuebleCargaComponent implements OnInit {

  id_mueble:number;
  formulario:FormGroup;

  constructor(
    private fb:FormBuilder,
    private muebleService:MuebleService,
    private route: ActivatedRoute,
    private router:Router,
  ) {
    
   }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      descripcion:'',
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

  confirmar(){
    if(!this.formulario.valid){
      return;
    }
    let item = <Mueble>{};
    item.nombre = this.formulario.controls.nombre.value;
    item.descripcion = this.formulario.controls.descripcion.value;
    this.muebleService.store(item).subscribe(response=>{
      this.router.navigate(['/']);
    });
  }
}
