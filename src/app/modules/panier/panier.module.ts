import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';

@NgModule({
  imports: [
    CommonModule,
    PanierRoutingModule
  ],
  declarations: [PanierComponent]
})
export class PanierModule { }
