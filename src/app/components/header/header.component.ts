import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public tabList = [
    { name: 'MON CATALOGUE', color: 'rgb(110, 30, 120)', link: 'catalogue'},
    { name: 'TOUS LES SERVICES', color: 'rgb(225, 182, 18)', link: 'demandes'},
    { name: 'MES DEMANDES', color: 'rgb(205, 0, 55)', link: 'perso'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
