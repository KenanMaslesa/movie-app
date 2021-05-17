import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  casts: any;
  @Input() movieId: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieCasts(this.movieId);
  }

  getMovieCasts(movieID){
    this.movieService.getMovieCastAndCrew(movieID).subscribe(casts => this.casts = casts);
  }
}
