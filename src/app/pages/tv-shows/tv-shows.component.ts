import { Component, OnInit } from '@angular/core';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: any;
  currentPage = 1;
  constructor(private movieService: MovieAndTvService) { }

  ngOnInit(): void {
    this.getTvShows(this.currentPage);
  }

  getTvShows(page){
    this.movieService.getPopular('tv', page).subscribe((responseData) => this.tvShows = responseData);
  }

}
