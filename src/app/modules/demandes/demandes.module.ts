import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandesRoutingModule } from './demandes-routing.module';
import { DemandesComponent } from './demandes.component';

@NgModule({
  imports: [
    CommonModule,
    DemandesRoutingModule
  ],
  declarations: [DemandesComponent]
})
export class DemandesModule { }
