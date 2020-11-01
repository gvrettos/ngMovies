import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	constructor(private movieService: MovieService) { }

	movies: Movie[];
	selectedMovie: Movie;

	ngOnInit(): void {
		this.getMovies();
	}

	selectMovie(movie: Movie) {
		this.selectedMovie = movie;
	}

	getMovies() {
		this.movieService.getMovies().subscribe(movies => {
			this.movies = movies;
		});
	}

}
