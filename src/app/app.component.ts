import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../assets/posts/posts.json';

@Component({
  selector: 'ngx-site-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'JasonHodges.codes';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


}
