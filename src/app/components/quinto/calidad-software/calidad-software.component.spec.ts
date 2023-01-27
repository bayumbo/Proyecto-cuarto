import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadSoftwareComponent } from './calidad-software.component';

describe('CalidadSoftwareComponent', () => {
  let component: CalidadSoftwareComponent;
  let fixture: ComponentFixture<CalidadSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalidadSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
