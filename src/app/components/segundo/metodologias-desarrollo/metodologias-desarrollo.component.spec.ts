import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologiasDesarrolloComponent } from './metodologias-desarrollo.component';

describe('MetodologiasDesarrolloComponent', () => {
  let component: MetodologiasDesarrolloComponent;
  let fixture: ComponentFixture<MetodologiasDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodologiasDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodologiasDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
