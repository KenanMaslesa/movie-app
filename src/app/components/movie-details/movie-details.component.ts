import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieCardDetailsComponent implements OnInit {
  movie: any;
  movieID: number;
  mediaType: string;
  forbiddenContent: boolean;
  keywords: any;

  constructor(
    private movieAndTVService: MovieAndTvService,
    private route: ActivatedRoute,
    private keywordService: KeywordService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getMovie();
      }
      
  });
  }

  ngOnInit(): void {
  }

  getMovie(): void {
    this.movieID = +this.route.snapshot.paramMap.get('id');
    this.mediaType = this.route.snapshot.params['type'];
    this.getMovieKeywords(this.mediaType, this.movieID);

    this.keywordService
      .containsForbiddenKeywords(this.mediaType,this.movieID)
      .subscribe((contains) => {
        this.forbiddenContent = contains;
      });

    if (this.mediaType == 'movie') {
      this.movieAndTVService
        .getMovieDetails(this.movieID)
        .subscribe((movie) => (this.movie = movie));
    } else if (this.mediaType == 'tv') {
      this.movieAndTVService
        .getTvShowDetails(this.movieID)
        .subscribe((data) => (this.movie = data));
    }
  }

  getMovieKeywords(mediaType, movieID){
    this.keywordService.getMovieOrTvKeywords(mediaType, movieID).subscribe((responseData)=>(this.keywords = responseData));
  }

}
