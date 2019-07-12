import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsVideoComponent } from './news-video.component';

describe('NewsVideoComponent', () => {
  let component: NewsVideoComponent;
  let fixture: ComponentFixture<NewsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
