import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person:any;
  personId:number;
  images:any;
  showModal = false;
  
  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(){
    this.personId = + this.route.snapshot.paramMap.get('id');
    this.getPersonImages(this.personId);
    this.personService.getPerson(this.personId).subscribe((person)=>(this.person = person));
  }

  getPersonImages(personId){
    this.personService.getPersonImages(personId).subscribe((responseData) => {
    
      this.images = responseData
    });
  }

}
