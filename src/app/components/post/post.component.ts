import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '@jh/services/seo-service/seoservice.service';

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
  ogUrl = 'https://jasonhodges.codes';
  permalink: string;
  urlTitle: string;

  constructor(private activatedRoute: ActivatedRoute, private seoService: SEOService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.permalink = data.post.attributes['permalink'];
      this.urlTitle = data.post.attributes['urlTitle'];
      this.seoService.updateDescription(data.post.attributes['seo__desc']);
      this.seoService.updateKeywords(data.post.attributes['seo__key']);
      this.seoService.updateTitle(data.post.attributes['title']);
      this.seoService.updateOgUrl(data.post.attributes['permalink']);
      // this.seoService.updateOgType(data.post.attributes['type']);
      this.postPath = data.post['path'];
      this.postBody = data.post['body'];
      this.postTitle = data.post.attributes['title'];
    });
  }
}
