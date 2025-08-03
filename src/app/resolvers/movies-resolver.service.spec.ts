import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MoviesResolverService } from './movies-resolver.service';

describe('MoviesResolverService', () => {
  let service: MoviesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MoviesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
