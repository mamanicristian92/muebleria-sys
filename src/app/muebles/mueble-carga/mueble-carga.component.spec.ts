import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleCargaComponent } from './mueble-carga.component';

describe('MuebleCargaComponent', () => {
  let component: MuebleCargaComponent;
  let fixture: ComponentFixture<MuebleCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuebleCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuebleCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
