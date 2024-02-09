import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'jh-other',
  standalone: true,
  template: `
    <h1>Other stuff</h1>
    <main>
      <section class="posts-section">
        <jh-posts [layout]="layout"></jh-posts>
      </section>
    </main>
  `,
  imports: [
    PostsComponent,
  ],
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent {
  layout = 'other';
}
