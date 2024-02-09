import { Injectable } from '@angular/core';
import * as data from '../../../assets/posts/posts.json';
import { Post } from '../../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  jsonUrl = '../../../assets/posts/posts.json';
  postData: Post[] = (data as any).default;

  constructor() {}

  getPost(id: string): Post | undefined {
    return this.postData.find((post: Post) => post.attributes.urlTitle === id);
  }
  // async getPost(id: string | null): Promise<any> {
  //   const response = await fetch(this.jsonUrl);
  //   const json = await response.json();
  //   return json.find((posts: Post) => posts.attributes.urlTitle === id);
  // }
}
