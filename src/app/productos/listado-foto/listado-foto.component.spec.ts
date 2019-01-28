import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFotoComponent } from './listado-foto.component';

describe('ListadoFotoComponent', () => {
  let component: ListadoFotoComponent;
  let fixture: ComponentFixture<ListadoFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
