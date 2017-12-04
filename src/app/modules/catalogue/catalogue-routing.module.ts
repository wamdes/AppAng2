import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FerroviaireComponent } from './components/ferroviaire/ferroviaire.component';
import { BureautiqueComponent } from './components/bureautique/bureautique.component';
import { SupportComponent } from './components/support/support.component';
import { EquipementComponent } from './components/equipement/equipement.component';





const routes: Routes = [
{path:'', component: HomeComponent},
{path:'ferroviaire', component: FerroviaireComponent},
{path:'support' ,component: SupportComponent},
{path:'bureautique', component: BureautiqueComponent},
{path:'equipement', component: EquipementComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
