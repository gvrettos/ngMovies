import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentYear: number;
  highestRatedMovies: Movie[];

  constructor(private movieStateService: MovieStateService) { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();

    this.movieStateService.getMovies().subscribe(
      movies => this.highestRatedMovies = movies.sort((a, b) => +a.rating < +b.rating ? 1 : -1)
    );
  }

}
