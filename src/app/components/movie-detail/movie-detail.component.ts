import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  saveMovie() {
    this.movieService.createOrUpdateMovie(this.movie).subscribe(result => {
      console.log(result);
    });
  }

}
