import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontributorBeritaComponent } from './kontributor-berita.component';

describe('KontributorBeritaComponent', () => {
  let component: KontributorBeritaComponent;
  let fixture: ComponentFixture<KontributorBeritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontributorBeritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontributorBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
