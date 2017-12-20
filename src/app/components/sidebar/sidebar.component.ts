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

  /*@Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }*/

  public currentPath: string;
  @Input('menuList') set menuList1(arrayValue) {
    this._menuList = arrayValue;
  }
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this._router.events.subscribe((nav: NavigationEnd) =>{
      console.log('route::', nav);
      this.currentPath = nav.urlAfterRedirects;
    });
  }

  checkActive(url) {
    return new RegExp(url).test(this.currentPath);
  }


  get quickView(): { title: string; description: string } {
    return this._quickView;
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
