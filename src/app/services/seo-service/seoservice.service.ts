// https://stackoverflow.com/questions/48330535/dynamically-add-meta-description-based-on-route-in-angular
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  siteUrl = 'https://jasonhodges.dev';
  personalTitle = ' | Jason Hodges';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateTitle(title: string) {
    this.title.setTitle(title + this.personalTitle);
  }

  updateOgType(type: string) {
    this.meta.updateTag({ property: 'og:type', content: type });
  }

  updateOgUrl(url: string) {
    this.updateOgType('article');
    const fullUrl = this.siteUrl + url;
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    return fullUrl;
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}

export const metaResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const seoService = inject(SEOService);
  const routeData = route.data;
  // this.permalink = data['post'].attributes['permalink'];
  // this.urlTitle = data['post'].attributes['urlTitle'];
  // this.postTitle = data['post'].attributes['title'];
  // this.postPath = data['post']['path'];
  // this.postBody = data['post']['body'];
  seoService.updateDescription(routeData['post'].attributes['seo__desc']);
  seoService.updateKeywords(routeData['post'].attributes['seo__key']);
  seoService.updateTitle(routeData['post'].attributes['title']);
  seoService.updateOgUrl(routeData['post'].attributes['permalink']);
  debugger;
};
