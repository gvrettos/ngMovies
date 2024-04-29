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
      movies => {
        this.highestRatedMovies = this.sortByRatingDesc(movies);
      }
    );
  }

  sortByRatingDesc(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => {
        const ratingA = +a.rating;
        const ratingB = +b.rating;
    
        // Handle missing or invalid ratings first
        if (isNaN(ratingA)) {
          // Move A towards the end
          return 1;
        }
        if (isNaN(ratingB)) {
          // Move B towards the end
          return -1;
        }
        // Compare valid ratings numerically
        return ratingB - ratingA; // Descending order
    });
  }

}
