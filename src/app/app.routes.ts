import { Routes } from '@angular/router';
import { postResolver } from './components/post/post-resolver.service';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './containers/about/about.component';
import { HomeComponent } from './containers/home/home.component';
import { OtherComponent } from './containers/other/other.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'other', component: OtherComponent },
  { path: 'blog/:urlTitle', component: PostComponent, resolve: { post: postResolver } },
];
