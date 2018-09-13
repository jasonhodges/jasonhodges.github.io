import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [],
  providers: [],
})
export class AppMaterialModule {
}
