import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesResolverService } from './resolvers/movies-resolver.service';
import { MovieDetailResolverService } from './resolvers/movie-detail-resolver.service';

const routes: Routes = [
  { 
    path: 'movies', 
    component: MoviesComponent, 
    data: { 
      title: 'List of movies'
    }, 
    resolve: { 
      movies: MoviesResolverService
    } 
  },
  { 
    path: 'movies/:id', 
    component: MovieDetailComponent,
    resolve: {
      movieDetail: MovieDetailResolverService
    }
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
