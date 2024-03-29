import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'jh-header',
  standalone: true,
  template: `
    <header>
      <div class="icon-container">
        <a href="https://github.com/jasonhodges" class="social-icon social-icon__github"></a>
        <a href="https://twitter.com/_jasonhodges" class="social-icon social-icon__twitter"></a>
      </div>
      <jh-nav></jh-nav>
    </header>
  `,
  imports: [
    NavComponent,
  ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {


}
