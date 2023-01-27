import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoInterfazComponent } from './diseno-interfaz.component';

describe('DisenoInterfazComponent', () => {
  let component: DisenoInterfazComponent;
  let fixture: ComponentFixture<DisenoInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisenoInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
