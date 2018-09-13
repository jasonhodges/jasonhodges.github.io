import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@jh/app-material.module';
import { PostComponent } from '@jh/components/post/post.component';
import { PostsComponent } from '@jh/components/posts/posts.component';
import { AboutComponent } from '@jh/containers/about/about.component';
import { HomeComponent } from '@jh/containers/home/home.component';
import { SidenavComponent } from '@jh/containers/sidenav/sidenav.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { OtherComponent } from './other/other.component';

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
    PostsComponent,
    OtherComponent
  ],
  exports: []
})
export class ContainersModule {
}
