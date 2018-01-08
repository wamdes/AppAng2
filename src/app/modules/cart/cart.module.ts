import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ROUTES_CART } from './cart.routes';
import {PanierComponent} from './components/panier.component';
import {SharedModule} from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES_CART,
    SharedModule
  ],
  declarations: [
    PanierComponent,
    FormComponent,
    ConfirmComponent
  ],
  providers: []
})
export class CartModule {
}
