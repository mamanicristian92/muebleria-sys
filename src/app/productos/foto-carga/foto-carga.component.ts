import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../_service/producto.service';
import { Subscription } from 'rxjs';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foto-carga',
  templateUrl: './foto-carga.component.html',
  styleUrls: ['./foto-carga.component.scss']
})
export class FotoCargaComponent implements OnInit {

  files:File[];
  id_producto:number;

  constructor(private productoService:ProductoService,   
    private route: ActivatedRoute,
    private router:Router,) {  }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id_producto = params['id_producto'];
    });
  }
  progress:number
  hasBaseDropZoneOver:boolean = false
  httpEmitter:Subscription
  httpEvent:HttpEvent<{}>
  lastFileAt:Date

  sendableFormData:FormData//populated via ngfFormData directive



  cancel(){
    this.progress = 0
    if( this.httpEmitter ){
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }

  uploadFiles(files:File[]){
    console.log(files);
    files.forEach(file=>{
      this.productoService.alta_foto(file,this.id_producto).subscribe(response=>{
      });
    });
  }

  getDate(){
    return new Date()
  }
  confirmar(){
    console.log(this.files);
  }

}
