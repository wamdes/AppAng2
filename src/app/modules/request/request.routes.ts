import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandesComponent } from './components/demandes.component';


/**
 * routes modules
 * @type Routes
 */
const requestRoutesParams: Routes = [
  {
    path: '',
    component: DemandesComponent
  }
];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_REQUEST: ModuleWithProviders = RouterModule.forChild(requestRoutesParams);
