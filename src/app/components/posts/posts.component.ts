import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '@ngx-site_posts/posts.json';

@Component({
  selector: 'ngx-site-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postData = data.default;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigateToPost(path: string) {
    console.log('path: ', path);
    this.router.navigate(['/blog', path], {relativeTo: this.activatedRoute.parent})
  }
}
