import { Component, OnInit, Input } from '@angular/core';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
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
  backgroundImageOnHover: string;
  overviewOnHover = null;
  reviews: any;
  images: any;

  constructor(private movieService: MovieAndTvService) {}

  ngOnInit(): void {
    this.getReviews();
    this.getImages();
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

  onMouseOver(obj) {
    this.backgroundImageOnHover = obj.poster_path;
    this.overviewOnHover = obj.overview;
  }
  onMouseLeave() {
    this.backgroundImageOnHover = null;
    this.overviewOnHover = null;
  }

  getReviews(){
    this.movieService.getReviews('movie', this.movieId).subscribe((responseData)=>{
      this.reviews = responseData
    });
  }


  getImages(){
    this.movieService.getImages('movie', this.movieId).subscribe((responseData)=>{
      this.images = responseData
    });
  }
}
