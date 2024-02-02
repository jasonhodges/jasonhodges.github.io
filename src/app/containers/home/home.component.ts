import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'jh-home',
  standalone: true,
  template: `
    <main>
      <section class="posts-section">
        <jh-posts [layout]="layout"></jh-posts>
      </section>
    </main>
  `,
  imports: [
    PostsComponent,
  ],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  layout = 'post';
}
