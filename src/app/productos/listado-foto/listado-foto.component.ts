import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../_service/producto.service';
import { ProductoFoto } from '../../_models/Producto';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = +(params['id_producto']);
      console.log(params);
      this.productoService.fotos(this.id).subscribe(response=>{
        this.fotos=response;
      });
    });
  }
  nuevo(){
    this.router.navigate(['productos/'+ this.id + '/fotos/nuevo']);
  }

}
