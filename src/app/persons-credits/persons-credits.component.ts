import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-persons-credits',
  templateUrl: './persons-credits.component.html',
  styleUrls: ['./persons-credits.component.scss'],
})
export class PersonsCreditsComponent implements OnInit {
  credits: any;
  @Input() personId: number;
  showDirecting = false;
  showProduction = false;
  showCrew = false;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPersonsCombinedCredits(this.personId);
  }

  getPersonsCombinedCredits(personId) {
    this.movieService.getPersonsCombinedCredits(personId).subscribe(
      (credits) => (
        this.credits = credits,
        this.credits.crew.forEach((crew) => {
          if (crew.department == 'Directing') this.showDirecting = true;
          if (crew.department == 'Production') this.showProduction = true;
          if (crew.department == 'Crew') this.showCrew = true;
        })
      )
    );
  }
}
