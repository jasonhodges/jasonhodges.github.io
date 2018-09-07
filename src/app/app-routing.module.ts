import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolverService } from '@ngx-site/components/post/post-resolver.service';
import { PostComponent } from '@ngx-site/components/post/post.component';
import { AboutComponent } from '@ngx-site/containers/about/about.component';
import { HomeComponent } from '@ngx-site/containers/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'blog/:urlTitle', component: PostComponent, resolve: {post: PostResolverService} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
