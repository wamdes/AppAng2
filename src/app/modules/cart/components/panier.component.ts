import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../common/services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
private _popin;

public requests=[
  {
    id: 1,
    ID: "CIALQSLCEAR",
    Nom: "€PSICO",
    Categorie: "Services Ferroviaires",
    SubCategorie: "Capacités",
    iconSmall: 'url("assets/img/icon2S.png")',
    iconLarge: "icon2L.png",
    objet: "Objet Ce service permet la simulation d'une demande de sillon et le calcul de la redevance correspondante (estimation de prix). Une mise à jour des données est effectuée annuellement. Une estimation de prix est proposée à titre indicatif.",
    contenu: "Simuler le prix des redevances d'utilisation de l'infrastructure. Gérer des données de référence.",
    prerequis: "Pas de prérequis.",
    publiccible: "Les acteurs commerciaux des sociétés transportant des voyageurs ou des marchandises sur le réseau peuvent utiliser ce service.",
    support: "Le support pour ce service est ouvert du lundi au vendredi (hors jours fériés) de 7h30 à 19h. Les équipes du support utilisateur sont joignables : - Par téléphone : 707 707  (04 26 21 17 17) - Par mail : supportutilisateurs@reseau.sncf.fr",
    engagement: "En cas de coupure planifiée du service, un message d'information sera sera envoyé aux référents SI au minimum 5 jours ouvrés avant la date de coupure. En cas de dysfonctionnement ou d'interruption du service, un message d'information sera envoyé aux référents SI dès sa détection et un autre message sera envoyé à la reprise du service.",
    crea:"04/11/2017"
  }

]
  constructor(public store: StoreService, private  _router: Router) { }
  confirm(){
    this.popin='panier';
  }
  get popin() {
    return this._popin;
  }

  set popin(value) {
    this._popin = value;
  }
  ngOnInit() {
  }

  goTo(url){
  let temp_url =  document.location.pathname;
  if(url!=="/mon-panier/form")
      this._router.navigate([temp_url+url]);
  else
  this._router.navigate([url]);
  }
}
