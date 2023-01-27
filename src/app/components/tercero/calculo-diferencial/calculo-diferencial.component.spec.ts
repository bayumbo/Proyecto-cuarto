import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoDiferencialComponent } from './calculo-diferencial.component';

describe('CalculoDiferencialComponent', () => {
  let component: CalculoDiferencialComponent;
  let fixture: ComponentFixture<CalculoDiferencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoDiferencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoDiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
