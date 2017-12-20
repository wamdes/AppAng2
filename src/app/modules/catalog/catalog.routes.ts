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
    path: ':menu',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: ':submenu', component: HomeComponent },
      { path: ':submenu/details/:id', component: HomeComponent },
    ]
  }
  ];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CATALOG: ModuleWithProviders = RouterModule.forChild(catalogRoutesParams);
