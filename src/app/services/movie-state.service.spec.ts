import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MovieStateService } from './movie-state.service';

describe('MovieStateService', () => {
  let service: MovieStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
