import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MovieCardDetailsComponent } from './components/movie-details/movie-details.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {BreadcrumbModule} from 'angular-crumbs';
import { NgpSortModule } from "ngp-sort-pipe";
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';
import { CastsComponent } from './components/casts/casts.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { TrendingsComponent } from './components/trendings/trendings.component';
import { VideoSliderComponent } from './components/video-slider/video-slider.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PersonComponent } from './components/person/person.component';
import { PersonsCreditsComponent } from './components/persons-credits/persons-credits.component';
import { ForbiddenContentComponent } from './components/forbidden-content/forbidden-content.component';
import { PopularComponent } from './components/popular/popular.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PeopleComponent } from './pages/people/people.component';
import { TvComponent } from './pages/tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieCardDetailsComponent,
    SimilarMoviesComponent,
    CastsComponent,
    MovieInfoComponent,
    TrendingsComponent,
    VideoSliderComponent,
    LoaderComponent,
    PersonComponent,
    PersonsCreditsComponent,
    ForbiddenContentComponent,
    PopularComponent,
    HomeComponent,
    HeaderComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule,
    NgbPaginationModule,
    BreadcrumbModule,
    NgpSortModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
