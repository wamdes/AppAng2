import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES_REQUEST} from './request.routes';
import { DemandesComponent } from './components/demandes.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ROUTES_REQUEST,
    SharedModule
  ],
  declarations: [
    DemandesComponent
  ]
})
export class RequestModule { }
