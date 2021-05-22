import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardDetailsComponent } from './components/movie-details/movie-details.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MovieCardComponent, data: {breadcrumb: 'home'} },
  { path: 'details/:type/:id', component: MovieCardDetailsComponent, data: {breadcrumb: 'movie-details'} },
  { path: 'person/:id', component: PersonComponent, data: {breadcrumb: 'person'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
