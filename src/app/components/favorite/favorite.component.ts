import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  movies: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies(){
    this.firebaseService.getMoviesFromList("favorite").subscribe(response => {
      this.movies = response;
    })
  }
}
