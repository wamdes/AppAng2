import {Component, OnDestroy, OnInit} from '@angular/core';
import { MenuList } from '../../../../common/interfaces/menu-list';
import { CategoriesService } from '../../../../common/services/categories.service';
import {ActivatedRoute, Router} from "@angular/router";
import {SlideService} from 'ng2-slides';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public items: MenuList[];
  public quickView: MenuList;
  private paramsRouter;

  constructor(
    public categorie: CategoriesService,
    private route: ActivatedRoute) { }
    private _showCat: undefined|boolean = false;

  ngOnInit() {

    this.quickView = {
      title: 'quickView',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,' +
      ' leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.'
    };
      this.paramsRouter = this.route.params.subscribe(params => {
        this.showCat = !( Object.keys(params).length > 0 );
      });
    }

    ngOnDestroy() {
      this.paramsRouter.unsubscribe();
    }


  get showCat(): boolean | undefined {
    return this._showCat;
  }

  set showCat(value: boolean | undefined) {
    this._showCat = value;
  }
}
