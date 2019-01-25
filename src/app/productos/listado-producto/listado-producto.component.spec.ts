import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoProductoComponent } from './listado-producto.component';

describe('ListadoProductoComponent', () => {
  let component: ListadoProductoComponent;
  let fixture: ComponentFixture<ListadoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMuebleComponent } from './listado-mueble.component';

describe('ListadoMuebleComponent', () => {
  let component: ListadoMuebleComponent;
  let fixture: ComponentFixture<ListadoMuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
