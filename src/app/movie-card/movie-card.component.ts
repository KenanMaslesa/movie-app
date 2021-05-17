import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../models/Video';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})

export class MovieCardComponent implements OnInit {
  movies: any;
  showModal: boolean;
  videoUrl: any;
  page = 1;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getMovies();
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

  getMovies() {
    this.movieService.getMovies(this.page).subscribe((movies) => (this.movies = movies));
  }

  getMovieVideo(movieID) {
    this.movieService.getMovieVideo(movieID).subscribe((video: Video) => {
      this.updateVideoUrl(video.results[0].key);
    });
  }

  showTrailer(movieID) {
    this.getMovieVideo(movieID);
    this.showModal = true;
  }

  updateVideoUrl(id: string) {
    this.videoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl
    );
  }

  search(searchTerm) {
    if (searchTerm == '') this.getMovies();
    else
      this.movieService
        .getMoviesBysearchTerm(searchTerm)
        .subscribe((movies) => (this.movies = movies));
  }
  onValueChange(value: string): void {
    this.search(value);
  }
}
