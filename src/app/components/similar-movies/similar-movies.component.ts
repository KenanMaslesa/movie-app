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
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieAndTVService:MovieAndTvService, private keywordService: KeywordService) { }

  ngOnInit(): void {
    this.getSimilarMoviesTvShows(this.mediaType, this.movieId);
  }

  getSimilarMoviesTvShows(mediaType, movieId){
    this.movieAndTVService.getSimilarMoviesTvShows(mediaType, movieId).subscribe((data) => (this.createNewArayWithoutForbiddenKeywords(data)));
  }

  createNewArayWithoutForbiddenKeywords(data) {
    const tempArray = { results: [], total_pages: Number };
    tempArray.total_pages = data.total_pages;

    data.results.forEach((element) => {
      if (element.media_type != 'person') {
        this.keywordService
          .containsForbiddenKeywords(element.media_type, element.id)
          .subscribe((contains) => {
            if (!contains) tempArray.results.push({ ...element });
            this.similarMovies = tempArray;
          });
      }
    });
  }
}

