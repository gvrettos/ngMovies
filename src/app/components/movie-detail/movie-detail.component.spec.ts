import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MovieDetailComponent } from './movie-detail.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UnlessDirective } from '../../directives/unless.directive';
import { ImdblinkPipe } from '../../pipes/imdblink.pipe';

describe('MovieDetailComponent', () => {
  const mockActivatedRoute = {
    snapshot: {
      params: { id: '123' }
    },
    data: of({ movieDetail: { /* mock movie object */ } })
  };

  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MovieDetailComponent, 
        HighlightDirective,
        UnlessDirective, 
        ImdblinkPipe
      ],
      imports: [ 
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
