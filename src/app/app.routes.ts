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
    path: 'mes-demandes',
    loadChildren: 'app/modules/request/request.module#RequestModule'
  },
  {
    path: 'formumlaire-demande',
    loadChildren: 'app/modules/requestforms/requestforms.module#RequestformsModule'
  },
  {
    path: 'mon-compte',
    loadChildren: 'app/modules/account/account.module#AccountModule'
  },
  {
    path: 'mon-panier',
    loadChildren: 'app/modules/cart/cart.module#CartModule'
  },
  {
    path: 'mes-services',
    component: PersoComponent
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
