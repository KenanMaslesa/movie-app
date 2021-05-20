import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { MovieCardDetailsComponent } from './movie-details/movie-details.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {BreadcrumbModule} from 'angular-crumbs';
import { NgpSortModule } from "ngp-sort-pipe";
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { CastsComponent } from './casts/casts.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { VideoSliderComponent } from './video-slider/video-slider.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PersonComponent } from './person/person.component';
import { PersonsCreditsComponent } from './persons-credits/persons-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    SearchComponent,
    MovieCardDetailsComponent,
    SimilarMoviesComponent,
    CastsComponent,
    MovieInfoComponent,
    TrendingsComponent,
    VideoSliderComponent,
    LoaderComponent,
    PersonComponent,
    PersonsCreditsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
