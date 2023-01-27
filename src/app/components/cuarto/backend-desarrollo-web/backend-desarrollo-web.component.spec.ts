import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDesarrolloWebComponent } from './backend-desarrollo-web.component';

describe('BackendDesarrolloWebComponent', () => {
  let component: BackendDesarrolloWebComponent;
  let fixture: ComponentFixture<BackendDesarrolloWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendDesarrolloWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendDesarrolloWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
