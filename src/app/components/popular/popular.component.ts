import { Component, OnInit } from '@angular/core';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  popularMovies: any;
  popularTvShows: any;
  constructor(private movieAndTvService: MovieAndTvService) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getPopularTvShows();
  }

  getPopularMovies(){
    this.movieAndTvService.getPopular('movie', 1).subscribe((responseData)=> this.popularMovies = responseData);
  }

  getPopularTvShows(){
    this.movieAndTvService.getPopular('tv', 1).subscribe((responseData)=> this.popularTvShows = responseData);
  }

}
