import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * components
 */
import {HomeComponent} from './components/home/home.component';
import {FerroviaireComponent} from './components/ferroviaire/ferroviaire.component';
import {BureautiqueComponent} from './components/bureautique/bureautique.component';
import {SupportComponent} from './components/support/support.component';
import {EquipementComponent} from './components/equipement/equipement.component';
import {TelephonieComponent} from './components/telephonie/telephonie.component';
import {Bloctheme1Component} from './commons/bloctheme1/bloctheme1.component';



/**
 * routes modules
 * @type Routes
 */
const catalogRoutesParams: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ferroviaire',
    component: FerroviaireComponent,
},
    { path: 'ferroviaire/capacites', component: FerroviaireComponent },
    { path: 'ferroviaire/circulation', component: FerroviaireComponent },
    { path: 'ferroviare/infrastructure', component: FerroviaireComponent },
    { path: 'ferroviaire/maintenance', component: FerroviaireComponent },


  {
    path: 'support',
    component: FerroviaireComponent
  },
    { path: 'support/buget', component: FerroviaireComponent },
    { path: 'support/comptabilite', component: FerroviaireComponent },
    { path: 'support/controle-gestion', component: FerroviaireComponent },
    { path: 'support/dec-re-stat', component: FerroviaireComponent },
    { path: 'support/digital', component: FerroviaireComponent },
    { path: 'support/facturation', component: FerroviaireComponent },
    { path: 'support/foncier', component: FerroviaireComponent },
    { path: 'support/ged', component: FerroviaireComponent },
    { path: 'support/indus', component: FerroviaireComponent },
    { path: 'support/invest', component: FerroviaireComponent },
    { path: 'support/logistique', component: FerroviaireComponent },
    { path: 'support/collab', component: FerroviaireComponent },
    { path: 'support/prog', component: FerroviaireComponent },
    { path: 'support/ref-infra', component: FerroviaireComponent },
    { path: 'support/rh', component: FerroviaireComponent },
    { path: 'support/marches', component: FerroviaireComponent },
    { path: 'support/sig', component: FerroviaireComponent },
    { path: 'support/SI', component: FerroviaireComponent },


  {
    path: 'bureautique',
    component: BureautiqueComponent
  },
  { path: 'bureautique/bdd', component: FerroviaireComponent },
  { path: 'bureautique/messagerie', component: FerroviaireComponent },
  { path: 'bureautique/ocr', component: FerroviaireComponent },
  { path: 'bureautique/trad', component: FerroviaireComponent },
  { path: 'bureautique/secu', component: FerroviaireComponent },
  { path: 'bureautique/suite-adobe', component: FerroviaireComponent },
  { path: 'bureautique/suite-office', component: FerroviaireComponent },
  {
    path: 'equipement',
    component: FerroviaireComponent
  },
  { path: 'equipement/accessoires', component: FerroviaireComponent },
  { path: 'equipement/ecrans', component: FerroviaireComponent },
  { path: 'equipement/mobilite', component: FerroviaireComponent },
  { path: 'equipement/poste-fixe', component: FerroviaireComponent },
    { path: 'equipement/poste-portable', component: FerroviaireComponent },
  {
    path: 'telephonie',
    component: FerroviaireComponent
  },
  { path: 'telephonie/abonnements', component: FerroviaireComponent },
  { path: 'telephonie/tel-portables', component: FerroviaireComponent },

];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CATALOG: ModuleWithProviders = RouterModule.forChild(catalogRoutesParams);
