import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * components
 */
import {FormMouvComponent} from './components/form-mouv/form-mouv.component';
import { FormReclaComponent} from './components/form-recla/form-recla.component';
import {FormHorscatComponent} from './components/form-horscat/form-horscat.component';




/**
 * routes modules
 * @type Routes
 */
const requestformsRoutesParams: Routes = [
  {
    path: 'demande-mouvement',
    component: FormMouvComponent
  },
  {
    path: 'demande-reclamation',
    component: FormReclaComponent
  },
  {
    path: 'demande-horscat',
    component: FormHorscatComponent
  }
  ];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_REQFORMS: ModuleWithProviders = RouterModule.forChild(requestformsRoutesParams);
