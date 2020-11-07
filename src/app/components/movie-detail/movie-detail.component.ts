import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(
    private movieStateService: MovieStateService
  ) { }

  ngOnInit(): void {
  }

  saveMovie() {
    this.movieStateService.createOrUpdateMovie(this.movie).subscribe();
  }
}