import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMatematicoComponent } from './analisis-matematico.component';

describe('AnalisisMatematicoComponent', () => {
  let component: AnalisisMatematicoComponent;
  let fixture: ComponentFixture<AnalisisMatematicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisMatematicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisMatematicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
