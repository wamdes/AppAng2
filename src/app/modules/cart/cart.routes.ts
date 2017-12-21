import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PanierComponent} from './components/panier.component';
import {FormComponent} from './components/form/form.component';

/**
 * routes modules
 * @type Routes
 */
const cartRoutesParams: Routes = [
  {
    path: '',
    component:PanierComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CART: ModuleWithProviders = RouterModule.forChild(cartRoutesParams);
