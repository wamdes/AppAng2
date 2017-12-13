import { Component, Input, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { CommonModule } from '@angular/common';
import {SncfItems} from '../../../../common/interfaces/sncf-items';
import {ItemsService} from '../../../../common/services/items.service';
import {Paramnav} from '../../../../common/interfaces/paramnav';

@Component({
  selector: 'app-bloctheme1',
  templateUrl: './bloctheme1.component.html',
  styleUrls: ['./bloctheme1.component.css']
})
export class Bloctheme1Component implements OnInit {

  public ItemsList:SncfItems;
  public Cat:Set<any>;
  public Catlist;

  constructor(
    private http: Http,
    public getItems: ItemsService,

){}

public _param1: Paramnav;
public _param2: Paramnav;
@Input('param1') set param1(value) {
  switch(value){
      case "ferroviaire":
        this._param1 = "Services Ferroviaires"
      break;
      case "support":
        this._param1 = "Fonctions Support"
      break;
      case "bureautique":
        this._param1 = "Services Bureautiques"
      break;
      case "equipement":
        this._param1 = "Equipements Informatiques"
      break;
      case "telephonie":
        this._param1 = "Abonnements"
      break;
    }
  //this._param1 = value
}
@Input('param2') set param2(value) {


switch(value){
  case undefined:
    this._param2 = this._param1
    this._param1 = "Categorie"
  break;
  case "capacites":
    this._param1 = "SubCategorie"
    this._param2 = "Capacités"
  break;
  case "circulation":
    this._param1 = "SubCategorie"
    this._param2 = "Circulation"
  break;
  case "infrastructure":
    this._param1 = "SubCategorie"
    this._param2 = "Infrastructure"
  break;
  case "maintenance":
    this._param1 = "SubCategorie"
    this._param2 = "Maintenance et Ingénierie"
  break;
  case "buget":
    this._param1 = "SubCategorie"
    this._param2 = "Budget"
  break;
  case "comptabilite":
    this._param1 = "SubCategorie"
    this._param2 = "Comptabilité"
  break;
  case "controle-gestion":
    this._param1 = "SubCategorie"
    this._param2 = "Contrôle de gestion"
  break;
  case "dec-re-stat":
    this._param1 = "SubCategorie"
    this._param2 = "Décisionnel, Reporting et statistiques"
  break;
  case "digital":
    this._param1 = "SubCategorie"
    this._param2 = "Digital"
  break;
  case "facturation":
    this._param1 = "SubCategorie"
    this._param2 = "Facturation"
  break;
  case "foncier":
    this._param1 = "SubCategorie"
    this._param2 = "Foncier et immobilier"
  break;
  case "ged":
    this._param1 = "SubCategorie"
    this._param2 = "Ged"
  break;
  case "indus":
    this._param1 = "SubCategorie"
    this._param2 = "Industrie, Prévisions, Reporting"
  break;
  case "invest":
    this._param1 = "SubCategorie"
    this._param2 = "Investissements"
  break;
  case "logistique":
    this._param1 = "SubCategorie"
    this._param2 = "Logistique, Stock, transport"
  break;
  case "collab":
    this._param1 = "SubCategorie"
    this._param2 = "Partage et Collaboration"
  break;
  case "prog":
    this._param1 = "SubCategorie"
    this._param2 = "Programmation"
  break;
  case "ref-infra":
    this._param1 = "SubCategorie"
    this._param2 = "Référentiel Infrastructure"
  break;
  case "rh":
    this._param1 = "SubCategorie"
    this._param2 = "Ressources humaines"
  break;
  case "marches":
    this._param1 = "SubCategorie"
    this._param2 = "Salle de marchés"
  break;
  case "sig":
    this._param1 = "SubCategorie"
    this._param2 = "Sig et Cartographie"
  break;
  case "SI":
    this._param1 = "SubCategorie"
    this._param2 = "Système d'information"
  break;
  case "bdd":
    this._param1 = "SubCategorie"
    this._param2 = "Gestion de bases de données"
  break;
  case "messagerie":
    this._param1 = "SubCategorie"
    this._param2 = "Messagerie"
  break;
  case "ocr":
    this._param1 = "SubCategorie"
    this._param2 = "Numérisation et reconnaissance de texte"
  break;
  case "trad":
    this._param1 = "SubCategorie"
    this._param2 = "Traduction et Dictée vocale"
  break;
  case "secu":
    this._param1 = "SubCategorie"
    this._param2 = "Sécurité, Partage et Collaboration"
  break;
  case "suite-adobe":
    this._param1 = "SubCategorie"
    this._param2 = "Suite Adobe"
  break;
  case "suite-office":
    this._param1 = "SubCategorie"
    this._param2 = "Suite Microsoft Office"
  break;
  case "accessoires":
    this._param1 = "SubCategorie"
    this._param2 = "Accessoires et périphériques informatiques"
  break;
  case "ecrans":
    this._param1 = "SubCategorie"
    this._param2 = "Ecrans"
  break;
  case "Mobilité":
    this._param1 = "SubCategorie"
    this._param2 = "Infrastructure"
  break;
  case "poste-fixe":
    this._param1 = "SubCategorie"
    this._param2 = "Poste de travail fixe"
  break;
  case "poste-portable":
    this._param1 = "SubCategorie"
    this._param2 = "Poste de travail portable"
  break;
  case "abonnements":
    this._param1 = "SubCategorie"
    this._param2 = "Abonnements"
  break;
  case "tel-portables":
    this._param1 = "SubCategorie"
    this._param2 = "Téléphone portable"
  break;


  }

}


	ngOnInit() {

    console.log(this._param2)
this.getItems.getItems(`${this._param1}`,`${this._param2}`).subscribe(res=> {

  this.ItemsList = res;
  this._param1
  this._param2
  let Cat = new Set()
  let Catlist
  res.forEach(function(v,i){
    Cat.add(v.SubCategorie);
  })
  Cat.forEach
  this.Catlist = Array.from(Cat)
  //console.log(this.ItemsList)


})

    //return this.Catlist
    //this.ItemsList = res
  }
/**
*get
*
*/

//this.ItemsByCat = this.getItems().subscribe(res=>this.ItemsByCat=res);


//console.log("data :" +this.getItems().subscribe(data => {data}));

	 //console.log(my_cats)

  }
