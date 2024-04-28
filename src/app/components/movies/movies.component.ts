import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieStateService } from 'src/app/services/movie-state.service';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	title: string;

	constructor(
		private movieStateService: MovieStateService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {

		this.getMovies();
	}

	getMovies() {
		this.title = this.route.snapshot.data.title;

		this.movieStateService.getMovies().subscribe(movies => {
			this.movieStateService.movies = movies;
		});
	}

}
