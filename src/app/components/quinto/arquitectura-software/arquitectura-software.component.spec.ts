import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturaSoftwareComponent } from './arquitectura-software.component';

describe('ArquitecturaSoftwareComponent', () => {
  let component: ArquitecturaSoftwareComponent;
  let fixture: ComponentFixture<ArquitecturaSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquitecturaSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquitecturaSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
