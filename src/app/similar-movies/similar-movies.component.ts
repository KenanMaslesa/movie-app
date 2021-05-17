import { Component, OnInit, Input } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {
  similarMovies: any;
  @Input() movieId: number;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getSimilarMovies(this.movieId);
  }

  getSimilarMovies(movieId){
    this.movieService.getSimilarMovies(movieId).subscribe((movies) => (this.similarMovies = movies));
  }
}

