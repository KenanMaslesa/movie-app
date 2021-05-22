import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/services/person/person.service';

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
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersonsCombinedCredits(this.personId);
  }

  getPersonsCombinedCredits(personId) {
    this.personService.getPersonsCombinedCredits(personId).subscribe(
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
