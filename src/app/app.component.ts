import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  addMargin: boolean;

  constructor() { }

  onValueChange($event){
    this.addMargin = $event;
  }
}
