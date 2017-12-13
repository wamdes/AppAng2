import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormComponent } from './components/form/form.component';
import {SharedModule} from "../shared/shared.module";
/**
 * ROUTES
 */
import { ROUTES_CHECKOUT} from './checkout.routes';

@NgModule({
  imports: [
    CommonModule,
    ROUTES_CHECKOUT,
    SharedModule
  ],
  declarations: [ConfirmComponent, CheckoutComponent, FormComponent]
})
export class CheckoutModule { }
