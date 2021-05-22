import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv/tv-show.service';


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
    private movieService: MovieService,
    private route: ActivatedRoute,
    private tvService: TvShowService
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieID = +this.route.snapshot.paramMap.get('id');
    this.mediaType = this.route.snapshot.params['type'];

    if (this.mediaType == 'movie') {
      this.movieService
        .getMovieById(this.movieID)
        .subscribe((movie) => (this.movie = movie));
    }
     else if (this.mediaType == 'tv') {
       this.tvService.getTvShowDetails(this.movieID).subscribe((data)=>(this.movie = data));
    }
  }
}
