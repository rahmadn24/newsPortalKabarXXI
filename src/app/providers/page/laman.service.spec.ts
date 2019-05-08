import { TestBed } from '@angular/core/testing';

import { LamanService } from './laman.service';

describe('LamanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LamanService = TestBed.get(LamanService);
    expect(service).toBeTruthy();
  });
});
