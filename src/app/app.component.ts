import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'JasonHodges.codes';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


}
