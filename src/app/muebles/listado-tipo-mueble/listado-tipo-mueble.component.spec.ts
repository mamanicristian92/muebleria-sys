import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTipoMuebleComponent } from './listado-tipo-mueble.component';

describe('ListadoTipoMuebleComponent', () => {
  let component: ListadoTipoMuebleComponent;
  let fixture: ComponentFixture<ListadoTipoMuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTipoMuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTipoMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
