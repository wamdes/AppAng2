import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../common/services/store.service';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public open;
  private currentPath = '/catalogue';
  public tabList = [
    { name: 'MON CATALOGUE', color: 'rgb(110, 30, 120)', link: 'demandes'},
    { name: 'MES SERVICES', color: 'rgb(205, 0, 55)', link: 'catalogue'},
    { name: 'MES DEMANDES', color: 'rgb(205, 0, 55)', link: 'perso'},
    { name: 'TOUS LES SERVICES', color: 'rgb(225, 182, 18)', link: 'catalogue'}
  ];
  constructor(public stores: StoreService, private _router: Router) { }

  ngOnInit() {
    this._router.events
      .filter(nav => nav instanceof NavigationEnd)
      .subscribe((nav: NavigationEnd) => {
        this.currentPath =  nav.urlAfterRedirects;
        console.log(this.currentPath);
      });
  }
  currentPathFn() {
    return this.currentPath;
  }
}
