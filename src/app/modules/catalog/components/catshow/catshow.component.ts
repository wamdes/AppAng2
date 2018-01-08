import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../../common/services/categories.service";

@Component({
  selector: 'app-catshow',
  templateUrl: './catshow.component.html',
  styleUrls: ['./catshow.component.scss']
})
export class CatshowComponent implements OnInit {

  constructor(private categories: CategoriesService) {
  }

  ngOnInit() {
  }
  items() {
    if(this.categories.menuList && this.categories.menuList.listNiv1.length > 0){
      return this.categories.menuList.listNiv1.map(title => {
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
            .replace(/\s/g, '-')}@2x.png")`
        };
      });
    }
    return [];
  }

}
