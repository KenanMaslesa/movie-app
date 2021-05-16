import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardDetailsComponent } from './movie-card-details/movie-card-details.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MovieCardComponent, data: {breadcrumb: 'home'} },
  { path: 'movie-details/:id', component: MovieCardDetailsComponent, data: {breadcrumb: 'movie-details'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
