import { TestBed } from '@angular/core/testing';

import { ExoplanetService } from './exoplanet.service';

describe('ExoplanetService', () => {
  let service: ExoplanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExoplanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
