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
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { CastsComponent } from './casts/casts.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { VideoSliderComponent } from './video-slider/video-slider.component';

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
    VideoSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule,
    NgbPaginationModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
