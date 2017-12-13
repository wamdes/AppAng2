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
      //{ path: 'circulation', component: FerroviaireComponent },
      //{ path: 'circulation', component: FerroviaireComponent }


  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'bureautique',
    component: BureautiqueComponent
  },
  {
    path: 'equipement',
    component: EquipementComponent
  },
  {
    path: 'telephonie',
    component: TelephonieComponent
  }
];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CATALOG: ModuleWithProviders = RouterModule.forChild(catalogRoutesParams);
