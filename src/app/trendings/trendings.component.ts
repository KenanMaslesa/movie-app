import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent implements OnInit {
  trendingToday:any;
  trendingThisWeek:any;
  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.getTrendingMoviesToday();
    this.getTrendingMoviesThisWeek();
  }

  getTrendingMoviesToday(){
    this.moviesService.getTrendings('movie','day').subscribe((trendings)=>(this.trendingToday = trendings));
  }

  getTrendingMoviesThisWeek(){
    this.moviesService.getTrendings('movie','week').subscribe((trendings)=>(this.trendingThisWeek = trendings));
  }

}
