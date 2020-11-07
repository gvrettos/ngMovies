import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieStateService {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  getMovies(): Observable<Movie[]> {
    return this.movieService.getMovies().pipe(
      map(movies => {
        this.movies = movies;
        return movies;
      })
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.movieService.updateMovie(movie);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.movieService.createMovie(movie).pipe(
      map(movie => {
        this.movies.push(movie);
        return movie;
      })
    );
  }

  createOrUpdateMovie(movie: Movie): Observable<Movie> {
    if (movie.id) {
      return this.updateMovie(movie);
    } else {
      return this.createMovie(movie);
    }
  }
}
