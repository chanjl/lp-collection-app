import { Component, OnInit, Input } from '@angular/core';
import { LPItem } from './lp-enter.component';

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {
  @Input() //attributes
  myList: LPItem[] = []; //default empty list
  
  constructor() { }

  ngOnInit() {
  }

}
