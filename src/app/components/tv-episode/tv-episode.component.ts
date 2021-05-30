import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';

@Component({
  selector: 'app-tv-episode',
  templateUrl: './tv-episode.component.html',
  styleUrls: ['./tv-episode.component.scss']
})
export class TvEpisodeComponent implements OnInit {
episode: any;
tvId:number;
episodeNumber: number;
seasonNumber: number
  constructor(private tvService: MovieAndTvService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTvEpisode();
  }

  getTvEpisode(){
    this.tvId = +this.route.snapshot.paramMap.get('tvId');
    this.seasonNumber = +this.route.snapshot.paramMap.get('seasonumber');
    this.episodeNumber = +this.route.snapshot.paramMap.get('episodeNumber');
    this.tvService.getTvEpisode(this.tvId, this.seasonNumber, this.episodeNumber).subscribe((responseData)=> this.episode = responseData);
  }
}
