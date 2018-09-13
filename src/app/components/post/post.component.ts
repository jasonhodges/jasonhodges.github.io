import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jh-site-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: any;
  postPath: string;
  postBody: string;
  postTitle: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log('data: ', data);
      this.postPath = data.post['path'];
      this.postBody = data.post['body'];
      this.postTitle = data.post.attributes['title'];
    });
  }
}
