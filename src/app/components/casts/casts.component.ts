import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';


@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  casts: any;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getCastAndCrew(this.movieId, this.mediaType);
  }

  getCastAndCrew(movieID, mediaType){
    this.movieService.getCastAndCrew(movieID, mediaType).subscribe(casts => this.casts = casts);
  }
}
