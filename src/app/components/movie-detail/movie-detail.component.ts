import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from 'src/app/model/movie';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private movieStateService: MovieStateService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.movieStateService.getMovie(id)
                          .subscribe(movie => this.movie = movie);
  }

  saveMovie() {
    this.movieStateService.createOrUpdateMovie(this.movie).subscribe();
  }

  goBack() {
    this.location.back();
  }
}