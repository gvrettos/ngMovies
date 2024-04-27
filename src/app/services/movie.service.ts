import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = "http://localhost:3000/movies";

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.moviesUrl + "/" + id);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(this.moviesUrl + "/" + movie.id, movie);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.moviesUrl, movie);
  }

  createOrUpdateMovie(movie: Movie): Observable<Movie> {
    if (movie.id) {
      return this.updateMovie(movie);
    } else {
      return this.createMovie(movie);
    }
  }
}
