import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '@jh_posts/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postData = data.default;

  constructor() { }

  getPost(id: number | string): Observable<any> {
    console.log('id: ', id ? id : '');
    return this.postData.find((posts: any) =>
      posts.attributes.urlTitle === id
    );
  }
}
