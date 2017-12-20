import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {QuickView} from '../../common/interfaces/quick-view';
import {Back} from '../../common/interfaces/back';
import {MenuList} from '../../common/interfaces/menu-list';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private _menuList: MenuList;
  private _back: Back;
  private _quickView: QuickView;
  public listMenuFix = [
    {
      link: '',
      title: 'demande de mouvement DE personnel'
    },
    {
      link: '',
      title: 'demande de reclamation'
    },
    {
      link: '',
      title: 'demande hors catalogue'
    }
  ];

  /*@Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }*/

  public currentPath: undefined|string = document.location.pathname;
  @Input('menuList') set menuList(arrayValue) {
    this._menuList = arrayValue;

  }
  @Input('quickView') set quickView(arrayValue) {
    this._quickView = arrayValue;

  }

  constructor(

    private _router: Router
  ) { }

  ngOnInit() {

  this._router.events
    .filter(nav => nav instanceof NavigationEnd)
    .subscribe((nav: NavigationEnd) =>{
      console.log('route::', nav);

      this.currentPath = nav.urlAfterRedirects;
    });
  }

  colorMenu(title) {
    let color = 'rgba(0,0,0,1)';
    switch (title.toString().toUpperCase().replace(/\s/g, ''))
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

  arrowMenu(title) {
    return `/assets/img/${title.toString().toLowerCase().replace(/\s/g, '')}-arrow.png`;
  }

  checkActive(url) {
    return new RegExp(url).test(this.currentPath);
  }


  get quickView(): { title: string; description: string } {
    return this._quickView;
  }

  get menuList(): {} {
    return this._menuList;
  }

/* get back(): { link: string; title: string } {
    return this._back;
  }*/

  /**
   * go to
   * @param url
   */
  public goTo(url) {
    this._router.navigate([`${/^\//.test(url) ? url : '/' + url}`]);
  }

}
