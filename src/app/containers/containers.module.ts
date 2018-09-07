import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@ngx-site/app-material.module';
import { PostComponent } from '@ngx-site/components/post/post.component';
import { PostsComponent } from '@ngx-site/components/posts/posts.component';
import { AboutComponent } from '@ngx-site/containers/about/about.component';
import { HomeComponent } from '@ngx-site/containers/home/home.component';
import { SidenavComponent } from '@ngx-site/containers/sidenav/sidenav.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true
        }
      }
    })
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    SidenavComponent,
    PostComponent,
    PostsComponent
  ],
  exports: []
})
export class ContainersModule {
}
