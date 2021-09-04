import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
import { TvSeasonComponent } from './components/tv-season/tv-season.component';
import { TvEpisodeComponent } from './components/tv-episode/tv-episode.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// Auth service
import { AuthService } from "./shared/services/auth.service";
import { ServiceWorkerModule } from '@angular/service-worker';

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
    TvComponent,
    TvSeasonComponent,
    TvEpisodeComponent,
    FavoriteComponent,
    WatchlistComponent,
    SignInComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    NgbModule,
    NgbPaginationModule,
    BreadcrumbModule,
    NgpSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule { }
