import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PostService } from '@jh/components/post/post.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = route.paramMap.get('urlTitle');
    console.log(id);
    return this.postService.getPost(route.paramMap.get('urlTitle'));
  }
}
