import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ROUTES
 */
import { ROUTES_CATALOG} from './catalog.routes';
/**
 * shared dependencies
 */
import {SharedModule} from "../shared/shared.module";

/**
 * Components
 */
import { HomeComponent } from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  imports: [
    CommonModule,
    ROUTES_CATALOG,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    SubmenuComponent,
    DetailsComponent
  ]

})
export class CatalogModule { }
