import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/Video';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
import { SearchService } from 'src/app/services/search/search.service';
import { VideoService } from 'src/app/services/video/video.service';

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
    private movieAndTVService: MovieAndTvService,
    private sanitizer: DomSanitizer,
    private searchService: SearchService,
    private videoService: VideoService,
    private keywordService: KeywordService
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


  getMovieVideo(movieID, mediaType) {
    this.videoService.getVideos(mediaType, movieID).subscribe((video: Video) => {
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
    this.keywordService.getKeywords(query).subscribe((data)=>(this.keywords = data));
  }

  getMoviesByKeyword(keyword){
    this.movieAndTVService.getMoviesByKeyword(keyword).subscribe((data)=>(this.multiSearchData = data));
  }
}
