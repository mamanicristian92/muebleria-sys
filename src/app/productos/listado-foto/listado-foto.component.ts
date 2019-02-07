import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../_service/producto.service';
import { ProductoFoto } from '../../_models/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listado-foto',
  templateUrl: './listado-foto.component.html',
  styleUrls: ['./listado-foto.component.scss']
})
export class ListadoFotoComponent implements OnInit {
id:number;
  fotos:ProductoFoto[];
  constructor(
    private productoService:ProductoService,
    private route: ActivatedRoute,
    private router:Router,
    private sanitezer:DomSanitizer,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = +(params['id_producto']);
      console.log(params);
      this.productoService.fotos(this.id).subscribe(response=>{
        this.fotos=response;
        this.fotos.forEach(foto=>{
          this.productoService.foto(foto).subscribe(Blob=>{
            let urlCreator=window.URL;
            foto.archivo=this.sanitezer.bypassSecurityTrustUrl(urlCreator.createObjectURL(Blob));
          });
          return foto;
        })
      });
    });
  }
  nuevo(){
    this.router.navigate(['productos/'+ this.id + '/fotos/nuevo']);
  }

}
