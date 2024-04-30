import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from 'src/app/model/movie';
import { MovieStateService } from 'src/app/services/movie-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  isSaving: boolean;

  constructor(
    private movieStateService: MovieStateService,
    private route: ActivatedRoute,
    private location: Location,
    private _snackBar: MatSnackBar
  ) { 
    this.isSaving = false;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.route.data.subscribe((data: {movieDetail: Movie}) => {
      this.movie = data.movieDetail;
    });
  }

  saveMovie() {
    this.isSaving = true;
    this.movieStateService.createOrUpdateMovie(this.movie)
                          .subscribe(
                            (response) => {
                              this.isSaving = false;
                              this.openSnackBar(`${response.title} saved successfully!`);
                            },
                            (error) => {
                              this.isSaving = false;
                              console.error('Error handler:', error);
                              this.openSnackBar(`Failed with ${error.statusText}`);
                            }
                          );
  }

  goBack() {
    this.location.back();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
    });
  }
}