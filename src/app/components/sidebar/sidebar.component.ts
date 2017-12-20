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
  public listMenuFix = [];

  /*@Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }*/

  public currentPath: undefined|string = document.location.pathname;
  @Input('menuList') set menuList(arrayValue) {
    this._menuList = arrayValue;

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
      case 'FERROVIAIRE' :
        color = '#009aa6';
        break;
      case 'BUREAUTIQUE' :
        color = '#9e005d';
        break;
      case 'EQUIPEMENTINFORMATIQUE' :
        color = '#d52128';
        break;
      case 'FONCTIONSUPPORT' :
        color = '#82be00';
        break;
      case 'TELEPHONIE' :
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
    this._router.navigate([`${/^\//.test(url) ? url : '/' + url}`])
  }

}
