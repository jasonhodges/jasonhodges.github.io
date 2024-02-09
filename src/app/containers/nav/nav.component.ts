import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'jh-nav',
  standalone: true,
  template: `
    <nav mat-tab-nav-bar class="jh-nav" [tabPanel]="tabPanel">
      <a mat-tab-link
         *ngFor="let link of links"
         (click)="activeLink = link"
         [active]="activeLink === link"
         class="jh-nav jh-nav-link"
         routerLink="{{link}}"
         routerLinkActive
         #rla="routerLinkActive">{{link}}</a>
    </nav>
    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  `,
  imports: [
    MatTabNav,
    MatTabLink,
    RouterLinkActive,
    RouterLink,
    NgForOf,
    MatTabNavPanel,
  ],
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  {
  links = [
    'home',
    'about',
    'other'
  ];
  activeLink = this.links[0];
}
