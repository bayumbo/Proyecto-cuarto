import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraTrigonometriaComponent } from './algebra-trigonometria.component';

describe('AlgebraTrigonometriaComponent', () => {
  let component: AlgebraTrigonometriaComponent;
  let fixture: ComponentFixture<AlgebraTrigonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgebraTrigonometriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgebraTrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
