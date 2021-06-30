import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlist: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getWatchlist();
  }

  getWatchlist(){
    this.firebaseService.getMoviesFromList("watchlist").subscribe(response => {
      this.watchlist = response;
    })
  }
}
