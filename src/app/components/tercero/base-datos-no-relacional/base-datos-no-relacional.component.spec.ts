import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDatosNoRelacionalComponent } from './base-datos-no-relacional.component';

describe('BaseDatosNoRelacionalComponent', () => {
  let component: BaseDatosNoRelacionalComponent;
  let fixture: ComponentFixture<BaseDatosNoRelacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDatosNoRelacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDatosNoRelacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
