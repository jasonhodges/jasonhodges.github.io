import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';

@Component({
  selector: 'jhd-root',
  standalone: true,
  template: `
    <jh-header></jh-header>

    <div class="wrapper jh-content-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  preserveWhitespaces: true,
})
export class AppComponent {
  title = 'JasonHodges.dev';

}
