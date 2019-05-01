import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyaratDanKetentuanComponent } from './syarat-dan-ketentuan.component';

describe('SyaratDanKetentuanComponent', () => {
  let component: SyaratDanKetentuanComponent;
  let fixture: ComponentFixture<SyaratDanKetentuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyaratDanKetentuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyaratDanKetentuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
