import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiData } from 'src/app/models/ApiData';
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
  currentPageSearch = 1;
  currentPageDiscover = 1;
  keywords: any;
  searchQuery:string;
  sortBy='popularity.desc';

  constructor(
    private movieAndTVService: MovieAndTvService,
    private sanitizer: DomSanitizer,
    private searchService: SearchService,
    private videoService: VideoService,
    private keywordService: KeywordService
  ) {}

  ngOnInit(): void {
    this.discover('movie', this.currentPageDiscover, this.sortBy);
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
    this.videoService
      .getVideos(mediaType, movieID)
      .subscribe((video: Video) => {
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


  multiSearch(query, page) {
    if (query != '') {
      this.searchService.multiSearch(query, page).subscribe((data: ApiData) => {
        this.createNewArayWithoutPorn(data);
      });
    } else {
      this.currentPageSearch = 1;
      this.discover('movie',this.sortBy, this.currentPageDiscover);
    }
  }

  createNewArayWithoutPorn(data) {
    const tempArray = { results: [],total_pages: Number };
    tempArray.total_pages = data.total_pages;
    
    data.results.forEach((element) => {
      if (element.media_type != 'person') {
        this.keywordService
          .containsForbiddenKeywords(element.media_type, element.id)
          .subscribe((contains) => {
            if (!contains)
              tempArray.results.push({ ...element});
            this.multiSearchData = tempArray;
          });
      }
    });
  }

  onValueChange(value: string): void {
    this.searchQuery = value;
    this.multiSearch(value, this.currentPageSearch);
  }

  onSortingChange(value){
    this.sortBy = value;
    this.discover('movie', this.currentPageDiscover, this.sortBy);
  }

  discover(mediaType = 'movie', page, sortBy, genres = '', keywords = '') {
    this.searchService
      .discover(mediaType, page, this.sortBy, genres, keywords)
      .subscribe((data) => (this.createNewArayWithoutPorn(data)));
  }

  getKeywords(query) {
    this.keywordService
      .getKeywords(query)
      .subscribe((data) => (this.keywords = data, console.log(data)));
  }

  getMoviesByKeyword(keyword) {
    this.movieAndTVService
      .getMoviesByKeyword(keyword)
      .subscribe((data) => (this.multiSearchData = data));
  }
}
