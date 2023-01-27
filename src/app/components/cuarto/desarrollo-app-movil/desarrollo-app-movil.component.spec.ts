import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAppMovilComponent } from './desarrollo-app-movil.component';

describe('DesarrolloAppMovilComponent', () => {
  let component: DesarrolloAppMovilComponent;
  let fixture: ComponentFixture<DesarrolloAppMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloAppMovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloAppMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
