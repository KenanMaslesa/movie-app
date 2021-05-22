import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private movieAndTVService: MovieAndTvService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieID = +this.route.snapshot.paramMap.get('id');
    this.mediaType = this.route.snapshot.params['type'];

    if (this.mediaType == 'movie') {
      this.movieAndTVService
        .getMovieDetails(this.movieID)
        .subscribe((movie) => (this.movie = movie));
    }
     else if (this.mediaType == 'tv') {
       this.movieAndTVService.getTvShowDetails(this.movieID).subscribe((data)=>(this.movie = data));
    }
  }
}
