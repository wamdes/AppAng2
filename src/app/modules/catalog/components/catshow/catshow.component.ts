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
  items(){
    if(this.categories.menuList && this.categories.menuList.listNiv1.length > 0){
      return this.categories.menuList.listNiv1.map(title => {
        return {
          title: title,
          image: `url("assets/img/${title}@2x.png")`
        };
      });
    }
    return [];
  }

}
