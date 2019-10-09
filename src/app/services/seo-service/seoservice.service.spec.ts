import { TestBed } from '@angular/core/testing';

import { SEOServiceService } from './seoservice.service';

describe('SEOServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SEOServiceService = TestBed.get(SEOServiceService);
    expect(service).toBeTruthy();
  });
});
