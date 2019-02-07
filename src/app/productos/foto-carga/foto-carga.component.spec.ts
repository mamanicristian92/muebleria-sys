import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoCargaComponent } from './foto-carga.component';

describe('FotoCargaComponent', () => {
  let component: FotoCargaComponent;
  let fixture: ComponentFixture<FotoCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
