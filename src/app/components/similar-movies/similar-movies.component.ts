import { Component, OnInit, Input } from '@angular/core';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {
  similarMovies: any;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieAndTVService:MovieAndTvService) { }

  ngOnInit(): void {
    this.getSimilarMoviesTvShows(this.mediaType, this.movieId);
  }

  getSimilarMoviesTvShows(mediaType, movieId){
    this.movieAndTVService.getSimilarMoviesTvShows(mediaType, movieId).subscribe((data) => (this.similarMovies = data));
  }
}

