import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  layout = 'post';
  constructor() { }

  ngOnInit() {
  }

}