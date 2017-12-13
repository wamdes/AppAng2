import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  public quickView = {
    title: 'QUICKVIEW',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
      leo aliquet euismod cursus, orci nibh dictum leo toere nodd la reccutega.`
  };
  public back = {
    link: 'catalogue',
    title: 'CATALOGUE'
  };
  public menuList1 = [
    {
      title: 'FERROVIAIRE',
      link: 'catalogue/ferroviaire',
      subtitles: [
        {
          title:'Capacité',
          link:'catalogue/ferroviaire/capacites'
      },
        {
          title:'circulation',
          link:'catalogue/ferroviaire/circulation'
        },
        {
          title:'Maintenance et ingenierie',
          link:'catalogue/ferroviaire/maintenance'
        },
        {
          title:'infrasctructure',
          link:'catalogue/ferroviaire/infrastructure'
        }
      ],
      description: '',
      color : '#b6b7f5'
    },
    {
        title: 'FONCTIONS SUPPORT',
        link: 'catalogue/support',
        subtitles: [
          {
          title:'budget',
          link:'catalogue/support/budget'
        },
        {
          title:'comptabilité',
          link:'catalogue/support/comptabilite'
        },
        {
          title:'contrôle de gestion ',
          link:'catalogue/support/controle-gestion'
        },
        {
          title:'Décisionnel, Reporting et statistiques',
          link:'catalogue/support/dec-re-stat'
        },
        {
          title:'Digital',
          link:'catalogue/support/digital'
        },
        {
          title:'Facturation',
          link:'catalogue/support/facturation'
        },
        {
          title:'Foncier & Immobilier',
          link:'catalogue/support/foncier'
        },
        {
          title:'Ged',
          link:'catalogue/support/ged'
        },
        {
          title:'Industrie, Prévisions, Reporting',
          link:'catalogue/support/indus'
        },
        {
          title:'Investissements',
          link:'catalogue/support/invest'
        },
        {
          title:'Logistique, Stock, transport',
          link:'catalogue/support/logistique'
        },
        {
          title:'Partage et Collaboration',
          link:'catalogue/support/collab'
        },
        {
          title:'Programmation',
          link:'catalogue/support/prog'
        },
        {
          title:'Référentiel Infrastructure',
          link:'catalogue/support/ref-infra'
        },
        {
          title:'Ressources Humaines',
          link:'catalogue/support/rh'
        },
        {
          title:'Salles de marchés',
          link:'catalogue/support/marches'
        },
        {
          title:'Sig & Cartographie',
          link:'catalogue/support/sig'
        },
        {
          title:'Système d\'information',
          link:'catalogue/support/SI'
        }
      ],
        description: '',
        color : '#b6b7f5'
      },
    {
      title: 'BUREAUTIQUE',
      link: 'catalogue/bureautique',
      subtitles: [{
        title:'Gestion de bases de données',
        link:'catalogue/bureautique/bdd'
      },
      {
        title:'Messagerie',
        link:'catalogue/bureautique/messagerie'
      },
      {
        title:'Numérisation et reconnaissance de texte',
        link:'catalogue/bureautique/ocr'
      },
      {
        title:'Systèmes d\'informations',
        link:'catalogue/bureautique/trad'
      },
      {
        title:'Sécurité, Partage et Collaboration',
        link:'catalogue/bureautique/secu'
      },
      {
        title:'Suite Adobe',
        link:'catalogue/bureautique/suite-adobe'
      },
      {
        title:'Suite Microsoft Office',
        link:'catalogue/bureautique/suite-office'
      }],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'EQUIPEMENT INFORMATIQUE',
      link: 'catalogue/equipement',
      subtitles: [
        {
          title:'Accessoires et périphériques informatiques',
          link:'catalogue/equipement/accessoires'
      },
      {
        title:'Ecrans',
        link:'catalogue/equipement/ecrans'
      },
      {
        title:'Mobilité',
        link:'catalogue/equipement/mobilite'
      },
      {
        title:'Poste de travail fixe',
        link:'catalogue/equipement/poste-fixe'
      },
      {
        title:'Poste de travail portable',
        link:'catalogue/equipement/poste-portable'
      },

      ],
      description: '',
      color : '#b6b7f5'
    },
    {
      title: 'TÉLÉPHONIE',
      link: 'catalogue/telephonie',
      subtitles: [
        {
          title:'Abonnements',
          link:'catalogue/equipement/abonnements'
      },
      {
        title:'Téléphone portable',
        link:'catalogue/equipement/tel-portables'
    },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
      leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.
      Aliquam erat volutpat. Aliquam erat volutpat. Etiam consequat ligula vel nisi vehicula fringilla.`,
      color : '#b6b7f5'
    }];

    public menuList2 = [
    {
      title: 'Demandes de mouvements personnels',
      link: 'catalogue/securite',
      description: ''
    },
    {
      title: 'Demandes de reclamation',
      link: 'catalogue/securite',
      description: ''
    },
    {
      title: 'Demandes hors catalogue',
      link: 'catalogue/securite',
      description: ''
    }
  ];
}
