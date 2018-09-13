import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    'home',
    'about',
    'other'
  ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {

  }

}
