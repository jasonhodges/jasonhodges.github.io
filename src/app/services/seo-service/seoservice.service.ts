// https://stackoverflow.com/questions/48330535/dynamically-add-meta-description-based-on-route-in-angular
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  siteUrl = 'https://jasonhodges.codes';
  personalTitle = ' | Jason Hodges';

  constructor(private title: Title, private meta: Meta) {
  }

  updateTitle(title: string) {
    this.title.setTitle(title + this.personalTitle);
  }

  updateOgType(type: string) {
    this.meta.updateTag({ property: 'og:type', content: type });
  }

  updateOgUrl(url: string) {
    this.updateOgType('article');
    this.meta.updateTag({ property: 'og:url', content: this.siteUrl + url });
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

}
