import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/models/Video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styles: [
    `
      /deep/ .carousel-item {
        text-align: center;
        padding: 100px;
      }
      ,
      /deep/ .carousel {
        width: 80%;
        margin: 0 auto;
      }
    `,
  ],
  providers: [NgbCarouselConfig],
})
export class VideoSliderComponent implements OnInit {
  trailerUrls: any;
  slides: Array<any> = [];
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer,
    config: NgbCarouselConfig
  ) {
    config.interval = 90000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
  }

  ngOnInit(): void {
    if(this.movieId!=null)
    this.getVideos(this.mediaType, this.movieId);
  }

  getVideos(mediaType, movieID) {
    this.videoService.getVideos(mediaType, movieID).subscribe((video: Video) => {
      this.trailerUrls = video;

      this.trailerUrls.results.forEach((item) => {
        this.slides.push(
          this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/' + item.key
          )
        );
      });
    });
  }
}
