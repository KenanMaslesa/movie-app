import { Component, OnInit, Input } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

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
}
