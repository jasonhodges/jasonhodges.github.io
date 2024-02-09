import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jh-site-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    NgIf,
    MatSidenav,
    AsyncPipe,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatIconButton,
    MatIcon,
  ],
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
