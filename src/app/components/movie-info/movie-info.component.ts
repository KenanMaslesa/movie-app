import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: any;
  @Input() movieId: number;
  @Input() mediaType: string;
  @Input() keywords: any;
  showModal: boolean;
  images: any;
  isInFavoriteList = false;
  isInWatchlist = false;
  favoriteList = "favorite";
  watchlist = "watchlist";

  constructor(private movieService: MovieAndTvService, private firebaseService:FirebaseService, public authService:AuthService,  public router: Router) {}

  ngOnInit(): void {
    this.getImages();
    if(this.authService.isLoggedIn){
      this.checkIsMovieInList(this.movieId, this.favoriteList);
      this.checkIsMovieInList(this.movieId, this.watchlist);
    }
  }

  getClassNameByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  getImages(){
    this.movieService.getImages('movie', this.movieId).subscribe((responseData)=>{
      this.images = responseData
    });
  }

  
  addMovieToList(movie, list){
    if(!this.authService.isLoggedIn)
      this.router.navigate(['sign-in']);

    this.firebaseService.addMovieToList(movie, list).subscribe(response => {
      this.setListVariables(list, true);
    }, error => {
      alert(error.message);
    });
  }

  removeMovieFromList(movie, list){
    if(!this.authService.isLoggedIn)
      this.router.navigate(['sign-in']);

    this.firebaseService.getMovieFirebaseId(movie.id, list).subscribe(movieId => {
      
      this.firebaseService.removeMoviFromList(movieId, list).subscribe(response => {
        this.setListVariables(list, false);
  
      }, error =>{
        alert(error.message);
      });
    })
   
  }

  checkIsMovieInList(movieId, list){
    this.firebaseService.getMovieFirebaseId(movieId, list).subscribe(response => {
      if(response != null){
        this.setListVariables(list, true);
      }
    })
  }

  setListVariables(list, booleanValue){
    if(list == this.favoriteList)
      this.isInFavoriteList = booleanValue;
    else if(list == this.watchlist)
      this.isInWatchlist = booleanValue;
  }

}

