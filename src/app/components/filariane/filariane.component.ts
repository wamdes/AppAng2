import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-filariane',
  templateUrl: './filariane.component.html',
  styleUrls: ['./filariane.component.scss']
})
export class FilarianeComponent implements OnInit {
  public currentPath = document.location.pathname.split('/').filter(v => v !== '');

  constructor(private  _router: Router) { }

  ngOnInit() {
    this._router.events
      .filter(nav => nav instanceof NavigationEnd)
      .subscribe((nav: NavigationEnd) =>{
        this.currentPath =  nav.urlAfterRedirects.split('/').filter(v => v !== '');
      });
  }
  colorMenu() {
    let color = 'rgba(0,0,0,1)';
    if(!(this.currentPath.length > 0)) return color;
    switch ((this.currentPath[1]||this.currentPath[0]).toString().toUpperCase().replace(/-/g, ''))
    {
      case 'SERVICESFERROVIAIRES' :
        color = '#009aa6';
        break;
      case 'SERVICESBUREAUTIQUES' :
        color = '#E05206';
        break;
      case 'EQUIPEMENTSINFORMATIQUES' :
        color = '#d52128';
        break;
      case 'FONCTIONSSUPPORT' :
        color = '#82be00';
        break;
      case 'ABONNEMENTS' :
        color = '#9e005d';
        break;
      case 'SECURITE' :
        color = '#e05206';
        break;
    }
    return color;
  }

  public goTo(info) {
    console.log(this.currentPath.reduce((final, curent) => {
      if(!final.bfind) final.path += '/' + curent;
      if(curent === info) final.bfind = true;
      return final;
    }, {bfind: false, path: ''} ).path);
    this._router.navigate([`${
      this.currentPath.reduce((final, curent) => {
        if(!final.bfind) final.path += '/' + curent;
        if(curent === info) final.bfind = true;
        return final;
      }, {bfind: false, path: ''} ).path
      }`]);
  }
}
