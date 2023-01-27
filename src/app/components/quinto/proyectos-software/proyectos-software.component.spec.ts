import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSoftwareComponent } from './proyectos-software.component';

describe('ProyectosSoftwareComponent', () => {
  let component: ProyectosSoftwareComponent;
  let fixture: ComponentFixture<ProyectosSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
