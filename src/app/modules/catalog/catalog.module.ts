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
import { CatshowComponent } from './components/catshow/catshow.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';


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
    DetailsComponent,
    CatshowComponent,
    SlideshowComponent
  ]

})
export class CatalogModule { }
