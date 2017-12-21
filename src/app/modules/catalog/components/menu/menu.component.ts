
import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../../common/services/categories.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items;
  constructor(
    private categories: CategoriesService
  ) {}

  ngOnInit() {
    this.items = this.setItem();
  }

  setItem() {
    let catTmp = document.location.pathname.split('catalogue/')[1].toString()
      .toLowerCase()
      .replace(/(é|è|ë|ê)/g, 'e')
      .replace(/(à|ã|ä|â)/g, 'a')
      .replace(/(î|ï)/g, 'i')
      .replace(/(ò|ö|ô)/g, 'o')
      .replace(/(u|ü|ù)/g, 'u')
      .replace(/ç/g, 'c')
      .replace(/(,|\.|\?|\!)/g, '')
      .replace(/\s/g, '-');

    let cat =  this.categories.menuList.listNiv1.find( v => {
      let c =  v.toString()
        .toLowerCase()
        .replace(/(é|è|ë|ê)/g, 'e')
        .replace(/(à|ã|ä|â)/g, 'a')
        .replace(/(î|ï)/g, 'i')
        .replace(/(ò|ö|ô)/g, 'o')
        .replace(/(u|ü|ù)/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/(,|\.|\?|\!)/g, '')
        .replace(/\s/g, '-');
      return (catTmp === c);
    });

    return this.categories.menuList.listNv2[cat].map(title => {
      return {
        title: title,
        image: `url("assets/img/${title.toString()
          .toLowerCase()
          .replace(/(é|è|ë|ê)/g, 'e')
          .replace(/(à|ã|ä|â)/g, 'a')
          .replace(/(î|ï)/g, 'i')
          .replace(/(ò|ö|ô)/g, 'o')
          .replace(/(u|ü|ù)/g, 'u')
          .replace(/ç/g, 'c')
          .replace(/(,|\.|\?|\!)/g, '')
          .replace(/\s/g, '-')}@2x.png")`,
        description: this.categories.categorie[cat][title][0].prerequis
      };
    });
  }



}
