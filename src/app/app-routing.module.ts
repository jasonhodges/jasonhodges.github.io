import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolverService } from '@jh/components/post/post-resolver.service';
import { PostComponent } from '@jh/components/post/post.component';
import { AboutComponent } from '@jh/containers/about/about.component';
import { HomeComponent } from '@jh/containers/home/home.component';
import { OtherComponent } from '@jh/containers/other/other.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'other', component: OtherComponent },
  { path: 'blog/:urlTitle', component: PostComponent, resolve: { post: PostResolverService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
