import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '@jh/shared/post.model';
import * as data from '@jh_posts/posts.json';

@Component({
  selector: 'jh-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() readonly layout;
  postData: Post[] = data.default;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  navigateToPost(path: string) {
    this.router.navigate(['/blog', path], { relativeTo: this.activatedRoute.parent });
  }
}
