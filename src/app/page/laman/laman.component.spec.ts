import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanComponent } from './laman.component';

describe('LamanComponent', () => {
  let component: LamanComponent;
  let fixture: ComponentFixture<LamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
