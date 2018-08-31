import { Component } from '@angular/core';
import { LPItem } from './components/lp-enter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp-collection-app';

  LPList: LPItem [] = [ { //test data
    name: "A Love Supreme",
    artist: "John Coltrane",
    rating: 9,
    image: "assets/a_love_supreme.jpg"
  },
  { 
    name: "Kind Of Blue",
    artist: "Miles Davis",
    rating: 10,
    image: "assets/kind_of_blue.jpg"
  }
];

  addToList(eventObject: LPItem) {
    console.log('added: ', eventObject);
    this.LPList.unshift(eventObject);
  }
}
