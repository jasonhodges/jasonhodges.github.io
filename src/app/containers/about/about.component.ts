import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
@Component({
  selector: 'jh-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>About me</h1>
    <markdown [src]="'./about.md'" ></markdown>
  `,
  imports: [
    MarkdownComponent,
  ],
})
export class AboutComponent {
constructor() {
  debugger
}

}
