import { TestBed } from '@angular/core/testing';

import { NewsByCategoryService } from './news-by-category.service';

describe('NewsByCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsByCategoryService = TestBed.get(NewsByCategoryService);
    expect(service).toBeTruthy();
  });
});
