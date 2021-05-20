import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person:any;
  personId:number;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(){
    this.personId = + this.route.snapshot.paramMap.get('id');
    this.movieService.getPerson(this.personId).subscribe((person)=>(this.person = person));
  }

}