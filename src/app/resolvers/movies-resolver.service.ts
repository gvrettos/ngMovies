import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { MovieStateService } from '../services/movie-state.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<Movie[]> {

  constructor(
    private movieStateService: MovieStateService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    return this.movieStateService.getMovies();
  }
}
