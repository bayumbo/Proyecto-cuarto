import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaAplicadaComponent } from './estadistica-aplicada.component';

describe('EstadisticaAplicadaComponent', () => {
  let component: EstadisticaAplicadaComponent;
  let fixture: ComponentFixture<EstadisticaAplicadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaAplicadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaAplicadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
