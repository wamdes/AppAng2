import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConfirmComponent, CheckoutComponent, FormComponent]
})
export class CheckoutModule { }
