import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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

  @Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }
  @Input('menuList') set menuList(value) {
    this._menuList = value;
  }
  @Input('quickView') set quickView(value) {
    this._quickView = value;
  }

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  get menuList() {
    return this._menuList;
  }

  get quickView(): { title: string; description: string } {
    return this._quickView;
  }

  get back(): { link: string; title: string } {
    return this._back;
  }

  /**
   * go to
   * @param url
   */
  public goTo(url) {
    this._router.navigate([`${/^\//.test(url) ? url : '/' + url}`])
  }

}
