import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudIngresoComponent } from './solicitud-ingreso.component';

describe('SolicitudIngresoComponent', () => {
  let component: SolicitudIngresoComponent;
  let fixture: ComponentFixture<SolicitudIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
