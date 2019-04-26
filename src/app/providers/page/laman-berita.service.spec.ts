import { TestBed } from '@angular/core/testing';

import { LamanBeritaService } from './laman-berita.service';

describe('LamanBeritaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LamanBeritaService = TestBed.get(LamanBeritaService);
    expect(service).toBeTruthy();
  });
});
