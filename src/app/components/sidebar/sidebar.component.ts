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

  private _menuList1: MenuList;
  private _menuList2: MenuList;
  //private _back: Back;
  private _quickView: QuickView;
  public selected:any;
  /*@Input('back') set back(value: { link: string; title: string }) {
    this._back = value;
  }*/
  @Input('menuList1') set menuList1(value) {
    this._menuList1 = value;
  }
  @Input('menuList2') set menuList2(value) {
    this._menuList2 = value;
  }

  @Input('quickView') set quickView(value) {
    this._quickView = value;
  }

  constructor(
    private _router: Router
  ) { }
  select(item){
       this.selected = (this.selected === item ? null : item);
    }
    isActive(item){
      return this.selected === item;
    }
  ngOnInit() {
  }

  get menuList2() {
    return this._menuList2;
  }
  get menuList1() {
    return this._menuList1;
  }

  get quickView(): { title: string; description: string } {
    return this._quickView;
  }

/*  get back(): { link: string; title: string } {
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
