import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {
  similarMovies: any;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getSimilarMoviesTvShows(this.mediaType, this.movieId);
  }

  getSimilarMoviesTvShows(mediaType, movieId){
    this.movieService.getSimilarMoviesTvShows(mediaType, movieId).subscribe((data) => (this.similarMovies = data));
  }
}

