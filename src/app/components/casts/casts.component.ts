import { Component, OnInit, Input } from '@angular/core';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';


@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  casts: any;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieAndTVService: MovieAndTvService) { }

  ngOnInit(): void {
    this.getCastAndCrew(this.movieId, this.mediaType);
  }

  getCastAndCrew(movieID, mediaType){
    this.movieAndTVService.getCastAndCrew(movieID, mediaType).subscribe(casts => this.casts = casts);
  }
}
