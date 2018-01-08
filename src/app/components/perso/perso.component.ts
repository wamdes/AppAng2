import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../common/interfaces/menu-list';
import { CategoriesService } from '../../common/services/categories.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {
  public items: MenuList[];
  public quickView: MenuList;
  private paramsRouter;
  public services_metiers=[
    "Apollo","Upgrade RAM service existant","ordinateur portable","IPhone S E"
  ];
  public services_bureautiques=[
    "Adobe writer/creator","MS Project","Option Internationale"
  ];
  constructor(
    public categorie: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.quickView = {
      title: 'quickView',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,' +
      ' leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.',
      img:'assets/img/qv1.png'
    };
      
  }

}
