import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanBeritaComponent } from './laman-berita.component';

describe('LamanBeritaComponent', () => {
  let component: LamanBeritaComponent;
  let fixture: ComponentFixture<LamanBeritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamanBeritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamanBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
