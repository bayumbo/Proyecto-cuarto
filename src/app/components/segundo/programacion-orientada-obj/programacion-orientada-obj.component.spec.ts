import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionOrientadaObjComponent } from './programacion-orientada-obj.component';

describe('ProgramacionOrientadaObjComponent', () => {
  let component: ProgramacionOrientadaObjComponent;
  let fixture: ComponentFixture<ProgramacionOrientadaObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionOrientadaObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionOrientadaObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
