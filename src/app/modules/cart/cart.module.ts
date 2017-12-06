import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ROUTES_CART } from './cart.routes';
import {PanierComponent} from './components/panier.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ROUTES_CART,
    SharedModule
  ],
  declarations: [
    PanierComponent
  ],
  providers: []
})
export class CartModule {
}
