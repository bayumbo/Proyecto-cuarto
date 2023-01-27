import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDesarrolloComponent } from './intro-desarrollo.component';

describe('IntroDesarrolloComponent', () => {
  let component: IntroDesarrolloComponent;
  let fixture: ComponentFixture<IntroDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
