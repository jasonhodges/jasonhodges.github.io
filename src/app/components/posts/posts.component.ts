import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import * as data from '../../../assets/posts/posts.json';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'jh-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    NgForOf,
    NgIf,
    MatCardHeader,
    MatCardAvatar,
    MatCardContent,
    RouterLink,
  ],
})
export class PostsComponent {
  @Input() layout: any;
  postData: Post[] = (data as any).default;
}
