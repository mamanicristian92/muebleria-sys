import {Component, OnInit } from '@angular/core';
import {FormBuilder, Form, Validators, FormGroup} from '@angular/forms';
import {TipoMueble} from '../../_models/TipoMueble';
import {TipoMuebleService} from '../../_service/tipo.mueble.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tipo-mueble-carga',
  templateUrl: './tipo-mueble-carga.component.html',
  styleUrls: ['./tipo-mueble-carga.component.scss']
})
export class TipoMuebleCargaComponent implements OnInit {

  id_tipo_mueble:number;
  formulario:FormGroup;

  constructor(
    private fb:FormBuilder,
    private tipoMuebleService: TipoMuebleService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group(
      {
        nombre:['',Validators.required],
        descripcion:'',
      }
    );
    this.route.params.subscribe(params=>{
      let id=params['id_tipo_mueble'];
      if(id){
        this.id_tipo_mueble=+id;
        this.tipoMuebleService.getBy(this.id_tipo_mueble).subscribe(response=>{
          this.formulario.controls.nombre.setValue(response.nombre);
          this.formulario.controls.descripcion.setValue(response.descripcion);
        });
      }
      else {
        this.id_tipo_mueble=0;
      }
    });
  }
  confirmar() {
    if(!this.formulario.valid){
      return;
    }
    let item = <TipoMueble>{};
    item.nombre = this.formulario.controls.nombre.value;
    item.descripcion = this.formulario.controls.descripcion.value;
    this.tipoMuebleService.store(item).subscribe(response=>{
      this.router.navigate(['/']);
    });
  }
}