import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { MovieCardDetailsComponent } from './movie-card-details/movie-card-details.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {BreadcrumbModule} from 'angular-crumbs';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    SearchComponent,
    MovieCardDetailsComponent
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
