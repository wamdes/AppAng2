import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../../common/interfaces/menu-list';
import { CategoriesService } from '../../../common/services/categories.service';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss']
})
export class DemandesComponent implements OnInit {
  public items: MenuList[];
  public quickView: MenuList;
  private paramsRouter;

public req_si=[
  {num_req:"INC 9918",service:"brehat",from_user:"Jorge PEDRO",to_user:"Jorge PEDRO",action:"modifications",crea:"12/09/2017",valid:"01/09/2017",statut:"en cours"},
  {num_req:"INC 9990",service:"casque sans fil",from_user:"Jorge PEDRO",to_user:"Jorge PEDRO",action:"souscription",crea:"03/07/2017",valid:"04/07/2017",statut:"terminé"},
  {num_req:"INC 9918",service:"brehat",from_user:"Namizata TRAORE",to_user:"Jorge PEDRO",action:"suppression",crea:"03/07/2017",valid:"23/06/2017",statut:"refusé"}
];
public req_mvt=[
  {nature:"l'Utilisateur arrive sur le site",from_user:"Jorge PEDRO",to_user:"Palis VINCENT",valid:"01/09/2017"},
  {nature:"l'Utilisateur part du site",from_user:"Jorge PEDRO",to_user:"Fisch Pauline",valid:"04/07/2017"},
];
public req_recla=[
  {num_req:"INC 9918",service:"TIS",id_ticket:"-",valid:"01/12/2017"},
  {num_req:"INC 9990",service:"DISCO CONSULTATION",id_ticket:"INC 9992010",valid:"11/14/2017"}
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
