import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../../_service/login.service';
import { Usuario } from '../../_models/usuario';
import { first } from 'rxjs/operators';
import { registerContentQuery } from '@angular/core/src/render3';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  {
  loginForm:FormGroup;
  returnUrl:string;
  loading = false;
  submitted = false;
  bsModalRef: BsModalRef;
  consultando:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    )
  {
  } 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.formBuilder.group({
      'email':['',Validators.required],
      'password':['',Validators.required],
    });
    
    this.returnUrl = this.route.snapshot.queryParams['returnURL'] || '/';
  }
  get f() { return this.loginForm.controls;}

  login():void{
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    let item = <Usuario>{};
    item.email = this.f.email.value;
    item.password = this.f.password.value;
    this.consultando=true;

    this.loginService.login(item)
    .pipe(first())  //Esto sirve para que se ejecute antes la otra parte en login.service
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]); //Ruta para ir al home o el que este guardado en el return_url
        this.consultando=false;
      },
      errores => {
        this.consultando=false;
        this.loading = false;
        var error:string = errores.error;
        this.bsModalRef = this.modalService.show(AutorizacionErrorModalComponent, {
          initialState:{
            error: error,
          }
        });
        this.bsModalRef.content.closeBtnName = 'Close';
      });
  }

register(): void {
  this.router.navigate(['/register']);
}
}

@Component({
  selector: 'modal-content',
  template:`
  <div class="modal-header">
    <h4 class="modal-title">Autenticación</h4>
    <button type="button" class="close" (click)="bsModalRef.hide()" aria-label="Cerrar">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="bsModalRef.hide()">Cerrar</button>
    </div>
  `
})
export class AutorizacionErrorModalComponent implements OnInit {
  error: string;
  closeBtnName: string;
  list: any[] = [];

  public dangerModal;

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(){
    this.list.push('PROFIT!!!');
  }
}
