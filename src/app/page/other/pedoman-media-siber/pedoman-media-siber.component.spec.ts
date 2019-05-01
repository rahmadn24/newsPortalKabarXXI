import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedomanMediaSiberComponent } from './pedoman-media-siber.component';

describe('PedomanMediaSiberComponent', () => {
  let component: PedomanMediaSiberComponent;
  let fixture: ComponentFixture<PedomanMediaSiberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedomanMediaSiberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedomanMediaSiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
