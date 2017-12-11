import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account.component';



/**
 * routes modules
 * @type Routes
 */
const accountRoutesParams: Routes = [
  {
    path: '',
    component: AccountComponent
  }
];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_ACCOUNT: ModuleWithProviders = RouterModule.forChild(accountRoutesParams);
