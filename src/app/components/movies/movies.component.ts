import { Component, OnInit } from '@angular/core';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	constructor(
		private movieStateService: MovieStateService
	) { }

	ngOnInit(): void {
		this.getMovies();
	}

	getMovies() {
		this.movieStateService.getMovies().subscribe(movies => {
			this.movieStateService.movies = movies;
		});
	}

}
