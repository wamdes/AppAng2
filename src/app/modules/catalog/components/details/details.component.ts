import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
service=
    {
      ID: "RUNTESNSEO",
      Nom: "@RISK INDUSTRIAL",
      Categorie: "Fonctions Support",
      SubCategorie: "Décisionnel, reporting et statistiques ",
      iconSmall: "icon1S.png",
      iconLarge: "icon1L.png",
      objet: "Objet Ce service permet d'exécuter l'analyse de risque par simulation Monte Carlo pour vous montrer de nombreuses issues possibles dans votre modèle Excel — et vous indiquer la probabilité de chacune.",
      contenu: "Calculer et suivre mathématiquement et objectivement de nombreux scénarios futurs possibles, pour vous indiquer ensuite les probabilités et les risques associés à chacun. Aider à planifier les meilleures stratégies de gestion du risque. Déterminer la meilleure allocation de ressources, la répartition d'actifs optimale, le plan le plus efficace.",
      prerequis: "Pas de prérequis.",
      publiccible: "Direction Analyse des Risques.",
      support: "Le support pour ce service est ouvert du lundi au vendredi (hors jours fériés) de 7h30 à 19h. Les équipes du support utilisateur sont joignables : - Par téléphone : 707 707  (04 26 21 17 17) - Par mail : supportutilisateurs@reseau.sncf.fr",
      engagement: "Le délai de prise en compte  d'un incident soumis par téléphone est immédiat, s'il est soumis par mail, il est de 4 heures."
    }

  constructor() { }

  ngOnInit() {
  }

}
