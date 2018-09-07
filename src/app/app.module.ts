import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@ngx-site/app-material.module';
import { AppRoutingModule } from '@ngx-site/app-routing.module';
import { AppComponent } from '@ngx-site/app.component';
import { ContainersModule } from '@ngx-site/containers/containers.module';
import { HeaderComponent } from '@ngx-site/containers/header/header.component';
import { NavComponent } from '@ngx-site/containers/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ContainersModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
