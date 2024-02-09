import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolverService {}

export const postResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PostService).getPost(route.paramMap.get('urlTitle')!);
};

export const homeResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PostService).getPost('Jason-Hodges-Dev-Home');
};
