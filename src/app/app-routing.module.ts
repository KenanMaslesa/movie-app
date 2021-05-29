import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { TvComponent } from './pages/tv/tv.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent, data: {breadcrumb: 'home'} },
  { path: 'movies', component: MoviesComponent, data: {breadcrumb: 'movies'} },
  { path: 'tv', component: TvComponent, data: {breadcrumb: 'tv'} },
  { path: 'people', component: PeopleComponent, data: {breadcrumb: 'people'} },
  { path: 'details/:type/:id', component: MovieCardDetailsComponent, data: {breadcrumb: 'movie-details'} },
  { path: 'person/:id', component: PersonComponent, data: {breadcrumb: 'person'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
