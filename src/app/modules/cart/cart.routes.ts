import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PanierComponent} from './components/panier.component';

/**
 * routes modules
 * @type Routes
 */
const cartRoutesParams: Routes = [
  {
    path: '',
    component: PanierComponent
  }
];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CART: ModuleWithProviders = RouterModule.forChild(cartRoutesParams);
