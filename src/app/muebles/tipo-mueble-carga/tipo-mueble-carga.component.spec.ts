import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMuebleCargaComponent } from './tipo-mueble-carga.component';

describe('TipoMuebleCargaComponent', () => {
  let component: TipoMuebleCargaComponent;
  let fixture: ComponentFixture<TipoMuebleCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMuebleCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMuebleCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
