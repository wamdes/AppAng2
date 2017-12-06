import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ROUTES
 */
import { ROUTES_CATALOG} from './catalog.routes';

/**
 * Components
 */
import { HomeComponent } from './components/home/home.component';
import { FerroviaireComponent } from './components/ferroviaire/ferroviaire.component';
import { BureautiqueComponent } from './components/bureautique/bureautique.component';
import { SupportComponent } from './components/support/support.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { Bloctheme1Component } from './commons/bloctheme1/bloctheme1.component';
import { EquipementComponent } from './components/equipement/equipement.component';
import { TelephonieComponent } from './components/telephonie/telephonie.component';
import { Bloctheme2Component } from './commons/bloctheme2/bloctheme2.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES_CATALOG
  ],
  declarations: [
    HomeComponent,
    FerroviaireComponent,
    BureautiqueComponent,
    SupportComponent,
    CatalogueComponent,
    Bloctheme1Component,
    Bloctheme2Component,
    EquipementComponent,
    TelephonieComponent
  ]

})
export class CatalogModule { }
