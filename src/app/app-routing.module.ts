import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { TvComponent } from './pages/tv/tv.component';
import { TvSeasonComponent } from './components/tv-season/tv-season.component';
import { TvEpisodeComponent } from './components/tv-episode/tv-episode.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: TvComponent },
  { path: 'season/:tvId/:seasonumber', component: TvSeasonComponent },
  { path: 'episode/:tvId/:seasonumber/:episodeNumber', component: TvEpisodeComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'details/:type/:id', component: MovieCardDetailsComponent },
  { path: 'person/:id', component: PersonComponent},
  { path: 'favorite', component: FavoriteComponent},
  { path: 'watchlist', component: WatchlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
