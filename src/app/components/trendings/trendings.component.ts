import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending/trending.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent implements OnInit {
  trendingToday:any;
  trendingThisWeek:any;
  constructor(private trendingService: TrendingService) { }

  ngOnInit(): void {
    this.getTrendingMoviesToday();
    this.getTrendingMoviesThisWeek();
  }

  getTrendingMoviesToday(){
    this.trendingService.getTrendings('movie','day').subscribe((trendings)=>(this.trendingToday = trendings));
  }

  getTrendingMoviesThisWeek(){
    this.trendingService.getTrendings('movie','week').subscribe((trendings)=>(this.trendingThisWeek = trendings));
  }

}
