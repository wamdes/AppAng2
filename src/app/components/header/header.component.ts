import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../common/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public open;
  public tabList = [
    { name: 'MON CATALOGUE', color: 'rgb(110, 30, 120)', link: 'catalogue'},
    { name: 'TOUS LES SERVICES', color: 'rgb(225, 182, 18)', link: 'demandes'},
    { name: 'MES DEMANDES', color: 'rgb(205, 0, 55)', link: 'perso'}
  ];
  constructor(public stores: StoreService) { }

  ngOnInit() {
  }

}
