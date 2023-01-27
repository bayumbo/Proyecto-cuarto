import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesMovilesComponent } from './aplicaciones-moviles.component';

describe('AplicacionesMovilesComponent', () => {
  let component: AplicacionesMovilesComponent;
  let fixture: ComponentFixture<AplicacionesMovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionesMovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacionesMovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
