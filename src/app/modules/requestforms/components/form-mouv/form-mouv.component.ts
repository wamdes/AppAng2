import {Component, OnDestroy, OnInit} from '@angular/core';
import { MenuList } from '../../../../common/interfaces/menu-list';
import { CategoriesService } from '../../../../common/services/categories.service';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-form-mouv',
  templateUrl: './form-mouv.component.html',
  styleUrls: ['./form-mouv.component.scss']
})
export class FormMouvComponent implements OnInit {
  natMouv=[
    {val:"in", libel:"l'utilisateur arrive sur le site"},
    {val:"out", libel:"l'utilisateur part du site"},
    {val:"stay", libel:"prolongation"},
    {val:"mig", libel:"l'utilisateur change de bureau sur le site"}
  ];
  locSite=[
    {val:"site1"},
    {val:"site2"}
  ];
  natContrat=[
    {val:"agent", libel:"Agent SNCF"},
    {val:"stag", libel:"Alternant/Satagiaire"},
    {val:"interim", libel:"Interimaire"},
    {val:"presta", libel:"prestataire"}
  ];
  situationUser=[
    {val:"embauche"},
    {val:"en poste a la sncf"}
  ];
  matInfo=[
    {val:"infos", libel:"information sur le poste informatique"},
    {val:"reat", libel:"réattribution d'un poste"},
    {val:"reqsupport", libel:"demande de poste faite au support"},
    {val:"newposte", libel:"Besoin d'un poste"},
    {val:"partcase", libel:"Cas particulier"}
  ];
  public items: MenuList[];
  public quickView: MenuList;
  private paramsRouter;

  constructor(
    public categorie: CategoriesService,
    private route: ActivatedRoute,
  ) { }
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
