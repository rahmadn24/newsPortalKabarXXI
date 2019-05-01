import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedaksiComponent } from './redaksi.component';

describe('RedaksiComponent', () => {
  let component: RedaksiComponent;
  let fixture: ComponentFixture<RedaksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedaksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
