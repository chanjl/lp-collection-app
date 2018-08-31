import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface LPItem {
  name: string;
  artist: string;
  rating: number,
  image: string;
}

@Component({
  selector: 'app-lp-enter',
  templateUrl: './lp-enter.component.html',
  styleUrls: ['./lp-enter.component.css']
})
export class LpEnterComponent implements OnInit {

  @Output() //events
  addLP = new EventEmitter<LPItem>();

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('addLPForm')
  addLPForm: NgForm;

  clear() {
    this.addLPForm.reset();
  }

  toAdd() {
    let url = "";
    url = this.addLPForm.value["lp-image"];
    if (url.length <= 0) //revert to default icon
      url = "assets/default.png";
    const eventObject: LPItem = {
      name: this.addLPForm.value["lp-name"],
      artist: this.addLPForm.value["lp-artist"],
      rating: this.addLPForm.value["lp-rating"],
      image: url
    }
    this.addLP.next(eventObject);
    this.addLPForm.resetForm();
  }
}
