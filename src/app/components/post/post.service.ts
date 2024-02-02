import { Injectable } from '@angular/core';
import { Post } from '../../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  jsonUrl = 'assets/posts/posts.json';

  constructor() {}

  async getPost(id: string | null): Promise<any> {
    const response = await fetch(this.jsonUrl);
    const json = await response.json();
    return json.find((posts: Post) => posts.attributes.urlTitle === id);
  }
}
