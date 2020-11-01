import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/mock/mock-movies';
import { Movie } from 'src/app/model/movie';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	constructor() { }

	movies = MOVIES;
	selectedMovie: Movie;

	ngOnInit(): void {
	}

	selectMovie(movie: Movie) {
		this.selectedMovie = movie;
	}

}
