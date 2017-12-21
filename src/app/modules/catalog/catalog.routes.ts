import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * components
 */
import {HomeComponent} from './components/home/home.component';
import { MenuComponent} from './components/menu/menu.component';
import {SubmenuComponent} from "./components/submenu/submenu.component";
import {DetailsComponent} from "./components/details/details.component";



/**
 * routes modules
 * @type Routes
 */
const catalogRoutesParams: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':menu',
    component: HomeComponent,
    children: [
      { path: '', component: MenuComponent },
      { path: ':submenu', component: SubmenuComponent },
      { path: ':submenu/details/:id', component: DetailsComponent },
      
    ]
  }
  ];
/**
 * Injection
 * @type {ModuleWithProviders}
 */
export const ROUTES_CATALOG: ModuleWithProviders = RouterModule.forChild(catalogRoutesParams);
