import { Component, OnInit, Input } from '@angular/core';
import { LPItem } from './lp-enter.component';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {
  @Input() //attributes
  myList: LPItem[] = []; //default empty list
  private ngNavigatorShareService: NgNavigatorShareService;
  constructor(
    ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
  }

  share(index: number) {
    console.log('share');
    console.log(this.myList[index]);
    this.ngNavigatorShareService.share({
      title: this.myList[index].name,
      text: this.myList[index].artist,
      url: 'https://developers.google.com/web'
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
