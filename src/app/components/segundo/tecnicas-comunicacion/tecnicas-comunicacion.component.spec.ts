import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicasComunicacionComponent } from './tecnicas-comunicacion.component';

describe('TecnicasComunicacionComponent', () => {
  let component: TecnicasComunicacionComponent;
  let fixture: ComponentFixture<TecnicasComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicasComunicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicasComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
