import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FerroviaireComponent } from './components/ferroviaire/ferroviaire.component';
import { BureautiqueComponent } from './components/bureautique/bureautique.component';
import { SupportComponent } from './components/support/support.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { Bloctheme1Component } from './commons/bloctheme1/bloctheme1.component';
//import { Bloctheme2Component } from './commons/bloctheme2/bloctheme2.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { TelephonieComponent } from './components/telephonie/telephonie.component';
import { DemandesComponent } from '../demandes/demandes.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ],
  declarations: [HomeComponent, FerroviaireComponent, BureautiqueComponent, SupportComponent, CatalogueComponent, Bloctheme1Component, EquipementComponent, TelephonieComponent, DemandesComponent]
})
export class CatalogueModule { }
