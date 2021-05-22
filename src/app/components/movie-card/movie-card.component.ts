import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/Video';
import { MovieService } from 'src/app/services/movie.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})

export class MovieCardComponent implements OnInit {
  multiSearchData: any;
  showModal: boolean;
  videoUrl: any;
  currentPage = 1;
  keywords:any;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.discover('movie',this.currentPage);
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

  getMovies(page) {
    this.movieService.getMovies(page).subscribe((movies) => (this.multiSearchData = movies));
  }

  getMovieVideo(movieID, mediaType) {
    this.movieService.getVideos(mediaType, movieID).subscribe((video: Video) => {
      this.updateVideoUrl(video.results[0].key);
    });
  }

  showTrailer(movieID, mediaType = 'movie') {
    this.getMovieVideo(movieID, mediaType);
    this.showModal = true;
  }

  updateVideoUrl(id: string) {
    this.videoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl
    );
  }

  search(searchTerm) {
    if (searchTerm == '') this.getMovies(this.currentPage);
    else
      this.multiSearch(searchTerm, this.currentPage);
  }

  multiSearch(query, page){
    this.searchService.multiSearch(query, page).subscribe((data) => (this.multiSearchData = data));
  }

  onValueChange(value: string): void {
    this.search(value);
  }

  discover(mediaType='movie', page, genres='', keywords=''){
    this.searchService.discover(mediaType,page,genres,keywords).subscribe((data) => (this.multiSearchData = data));
  }

  getKeywords(query){
    this.searchService.getKeywords(query).subscribe((data)=>(this.keywords = data));
  }

  getMoviesByKeyword(keyword){
    this.movieService.getMoviesByKeyword(keyword).subscribe((data)=>(this.multiSearchData = data));
  }
}
