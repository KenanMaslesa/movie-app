import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/Video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-card-details',
  templateUrl: './movie-card-details.component.html',
  styleUrls: ['./movie-card-details.component.scss']
})
export class MovieCardDetailsComponent implements OnInit {
  movie: any;
  trailerUrl: any;
  casts: any;
  showModal:boolean;

  constructor(private movieService:MovieService, 
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id)
      .subscribe(movie => this.movie = movie);
    this.getMovieVideo(id);
    this.getMovieCasts(id);
  }

  getMovieVideo(movieID) {
    this.movieService.getMovieVideo(movieID).subscribe((video: Video) => {
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/"+video.results[0].key
      );
    });
  }

  getMovieCasts(movieID){
    this.movieService.getMovieCastAndCrew(movieID).subscribe(casts => this.casts = casts);
  }

}
