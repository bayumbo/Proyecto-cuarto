import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateDiscretaComponent } from './mate-discreta.component';

describe('MateDiscretaComponent', () => {
  let component: MateDiscretaComponent;
  let fixture: ComponentFixture<MateDiscretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateDiscretaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateDiscretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
