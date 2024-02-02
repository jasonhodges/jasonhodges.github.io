import * as data from 'assets/posts/posts.json';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    MatCardContent,
    RouterLink,
  ],
})
export class PostsComponent implements OnInit {
  jsonUrl = 'assets/posts/posts.json';
  @Input()  layout: any;
  postData: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.postData = data.default as unknown as Post[];
    this.getPostData().then((d) => this.postData = d);
  }

  async getPostData(): Promise<any> {
    const response = await fetch(this.jsonUrl)
    return await response.json();
  }

  navigateToPost(path: string) {
    this.router.navigate(['/blog', path], { relativeTo: this.activatedRoute.parent });
  }
}
