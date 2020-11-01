import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/mock/mock-movies';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	constructor() { }

	movies = MOVIES;

	ngOnInit(): void {
	}
}
