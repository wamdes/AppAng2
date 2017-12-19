
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ferroviaire',
  templateUrl: './ferroviaire.component.html',
  styleUrls: ['./ferroviaire.component.css']
})
export class FerroviaireComponent implements OnInit {

  public items = [
    {
      title: 'FERROVIAIRE',
      description: 'test',
      image: 'url("assets/img/ferroviaire@2x.png")',
      show: false,
      items: [
        {
          title: 'Capacite',
          description: 'test',
          image: 'url("assets/img/equip_info.png")',
          link: 'request',
          items: [
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
              engagement: "En cas de coupure planifiée du service, un message d'information sera sera envoyé aux référents SI au minimum 5 jours ouvrés avant la date de coupure. En cas de dysfonctionnement ou d'interruption du service, un message d'information sera envoyé aux référents SI dès sa détection et un autre message sera envoyé à la reprise du service."
            }
          ]
        }
      ]
    },
    {
      title: 'test2',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test2.1',
          description: 'test',
          image: 'test.png',
          items: [
            {
              id: 1,
              title: 'test2.1.1',
              description: 'test',
              image: 'test.png'
            }
          ]
        }
      ]
    },
    {
      title: 'test3',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test3.1',
          description: 'test',
          image: 'test.png'
        },
        {
          id: 2,
          title: 'test3.2',
          description: 'test',
          image: 'test.png'
        }
      ]
    },
    {
      title: 'test',
      description: 'test',
      image: 'test.png',
      show: false,
      items: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          image: 'test.png'
        }
      ]
    }
  ];
      public quickView = {
      title: 'QUICKVIEW',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
        leo aliquet euismod cursus, orci nibh dictum leo toere nodd la reccutega.`
    };
  public menuList1 = [
      {
        title: 'FERROVIAIRE',
        link: 'catalogue/ferroviaire',
        arrow:'assets/img/arrow-blue.png',
        hovercolor:'#009aa6',
        subtitles: [
          {
            title:'Capacité',
            link:'catalogue/ferroviaire/capacites',
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
        color : '#009aa6'
      },
      {
          title: 'FONCTIONS SUPPORT',
          link: 'catalogue/support',
          arrow:'assets/img/arrow-green.png',
          hovercolor:'#82be00',
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
          color : '#82be00'
        },
      {
        title: 'BUREAUTIQUE',
        link: 'catalogue/bureautique',
        arrow:'assets/img/arrow-purple.png',
        hovercolor:'#9e005d',
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
        color : '#9e005d'
      },
      {
        title: 'EQUIPEMENT INFORMATIQUE',
        link: 'catalogue/equipement',
        arrow:'assets/img/arrow-red.png',
        hovercolor:'#d52128',
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
        color : '#d52128'
      },
      {
        title: 'TÉLÉPHONIE',
        link: 'catalogue/telephonie',
        arrow:'assets/img/arrow-purple.png',
        hovercolor:'#9e005d',
        subtitles: [
          {
            title:'Abonnements',
            link:'catalogue/equipement/abonnements'
        },
        {
          title:'Téléphone portable',
          link:'catalogue/equipement/tel-portables'
      }
    ],

        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat,
        leo aliquet euismod cursus, orci nibh dictum leo, vitae sollicitudin neque mi eget odio.
        Aliquam erat volutpat. Aliquam erat volutpat. Etiam consequat ligula vel nisi vehicula fringilla.`,
        color : '#9e005d'
      },

      {
        title: 'SECURITE',
        link: 'catalogue/securite',
        arrow:'assets/img/arrow-orange.png',
        hovercolor:'#e05206',
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
        color : '#e05206'
      }
    ];

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


  constructor() { }
  ngOnInit() {
  }

}
