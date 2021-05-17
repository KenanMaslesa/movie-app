import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieCardDetailsComponent implements OnInit {
  movie: any;
  movieID: number;

  constructor(private movieService:MovieService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieID = + this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.movieID)
      .subscribe(movie => this.movie = movie);
  }

}
