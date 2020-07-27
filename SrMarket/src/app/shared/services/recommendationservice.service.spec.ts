import { TestBed } from '@angular/core/testing';

import { RecommendationserviceService } from './recommendationservice.service';

describe('RecommendationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationserviceService = TestBed.get(RecommendationserviceService);
    expect(service).toBeTruthy();
  });
});
