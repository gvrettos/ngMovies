import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	selectedMovie: Movie;

	constructor(
		private movieStateService: MovieStateService
	) { }

	ngOnInit(): void {
		this.getMovies();
	}

	selectMovie(movie: Movie) {
		this.selectedMovie = movie;
	}

	clearSelected() {
		this.selectedMovie = undefined;
	}

	getMovies() {
		this.movieStateService.getMovies().subscribe(movies => {
			this.movieStateService.movies = movies;
		});
	}

}
