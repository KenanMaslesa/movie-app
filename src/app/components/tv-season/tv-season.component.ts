import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-tv-season',
  templateUrl: './tv-season.component.html',
  styleUrls: ['./tv-season.component.scss']
})
export class TvSeasonComponent implements OnInit {
  tvId: number;
  seasoNumber: number;
  season: any;
  backgroundImageOnHover: string;

  constructor(private tvService: MovieAndTvService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTvSeason();
  }

  getTvSeason(){
    this.tvId = +this.route.snapshot.paramMap.get('tvId');
    this.seasoNumber = +this.route.snapshot.paramMap.get('seasonumber');
    this.tvService.getTvSeasons(this.tvId, this.seasoNumber).subscribe((responseData)=> this.season = responseData);
  }

  onHover(episode){
    this.backgroundImageOnHover = episode.still_path;
  }

}
