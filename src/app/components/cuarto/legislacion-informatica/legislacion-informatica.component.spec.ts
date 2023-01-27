import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacionInformaticaComponent } from './legislacion-informatica.component';

describe('LegislacionInformaticaComponent', () => {
  let component: LegislacionInformaticaComponent;
  let fixture: ComponentFixture<LegislacionInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislacionInformaticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegislacionInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
