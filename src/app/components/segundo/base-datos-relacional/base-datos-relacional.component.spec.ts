import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDatosRelacionalComponent } from './base-datos-relacional.component';

describe('BaseDatosRelacionalComponent', () => {
  let component: BaseDatosRelacionalComponent;
  let fixture: ComponentFixture<BaseDatosRelacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDatosRelacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDatosRelacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
