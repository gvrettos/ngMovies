import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MovieDetailResolverService } from './movie-detail-resolver.service';

describe('MovieDetailResolverService', () => {
  let service: MovieDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
