import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../../../common/interfaces/menu-list';
import { CategoriesService } from '../../../../common/services/categories.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items: MenuList[];
  public quickView: MenuList[];
  public menuList: MenuList[];

  constructor( private categorie: CategoriesService) { }

  ngOnInit() {
    this.menuList = this.categorie.menuList
    //console.log(this.categorie.categorie);
    //console.log(this.categorie.menuList);
  }

}
