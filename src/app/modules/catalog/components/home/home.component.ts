import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../../../common/interfaces/menu-list';
import { CategoriesService } from '../../../../common/services/categories.service';
import {ActivatedRoute, Router} from "@angular/router";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items: MenuList[];
  public quickView: MenuList;
  private paramsRouter;

  constructor(
    public categorie: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.quickView = {
      title: 'quickView',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,' +
      ' leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.'
    };
      this.paramsRouter = this.route.params.subscribe(params => {
        console.log('params', params);
      });
    }

    ngOnDestroy() {
      this.paramsRouter.unsubscribe();
    }


}
