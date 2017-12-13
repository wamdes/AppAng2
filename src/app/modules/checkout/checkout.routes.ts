import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * components
 */
import {ConfirmComponent} from './components/confirm/confirm.component';
import {FormComponent} from './components/form/form.component';
import {CheckoutComponent} from './components/checkout/checkout.component';




/**
 * routes modules
 * @type Routes
 */
const CheckoutRoutesParams: Routes = [
  {
    path: '',
    redirectTo: 'checkout',
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  }

];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CHECKOUT: ModuleWithProviders = RouterModule.forChild(CheckoutRoutesParams);
