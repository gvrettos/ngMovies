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
}
