import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersoComponent } from './components/perso/perso.component';
import { FavorisComponent } from './components/favoris/favoris.component';

const routesParams: Routes = [
  {
    path: 'catalogue',
    loadChildren: 'app/modules/catalog/catalog.module#CatalogModule'
  },
  {
    path: 'request',
    loadChildren: 'app/modules/request/request.module#RequestModule'
  },
  {
    path: 'account',
    loadChildren: 'app/modules/account/account.module#AccountModule'
  },
  {
    path: 'panier',
    loadChildren: 'app/modules/cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: 'app/modules/checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'perso',
    component: PersoComponent
  },
  {
    path: 'favoris',
    component: FavorisComponent
  },
  /**
   * redirect (homepage)
   */
  {
    path: '',
    redirectTo: '/catalogue',
    pathMatch: 'full'
  },
  /**
   * other path (path not found)
   * redirect to homepage
   */
  {
    path: '**',
    redirectTo: '/catalogue',
  },
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routesParams);
