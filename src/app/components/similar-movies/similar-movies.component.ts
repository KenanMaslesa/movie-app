import { Component, OnInit, Input } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {
  similarMovies: any;
  currentPage = 1;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieAndTVService:MovieAndTvService, private keywordService: KeywordService) { }

  ngOnInit(): void {
    this.getSimilarMoviesTvShows(this.mediaType, this.movieId, this.currentPage);
  }

  getSimilarMoviesTvShows(mediaType, movieId, page){
    this.movieAndTVService.getSimilarMoviesTvShows(mediaType, movieId, page).subscribe((data) => this.similarMovies = data);
  }

}

