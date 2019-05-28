import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '@jh/app-material.module';
import { AppRoutingModule } from '@jh/app-routing.module';
import { AppComponent } from '@jh/app.component';
import { ContainersModule } from '@jh/containers/containers.module';
import { HeaderComponent } from '@jh/containers/header/header.component';
import { NavComponent } from '@jh/containers/nav/nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
