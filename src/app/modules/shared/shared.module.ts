import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Common services dependencies
 */
import { StoreService } from '../../common/services/store.service';


/**
 * Guards
 */

/**
 * pipes
 */

/**
 * Components
 */
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import { PopinComponent } from '../../components/popin/popin.component';
import {ConnectionBackofficeService} from '../../common/services/connection-backoffice.service';
import {CategoriesService} from '../../common/services/categories.service';
import {FilarianeComponent} from '../../components/filariane/filariane.component';

@NgModule({
  declarations: [
    CardComponent,
    SidebarComponent,
    TooltipComponent,
    PopinComponent,
    FilarianeComponent
  ],
  exports: [
    CardComponent,
    SidebarComponent,
    TooltipComponent,
    PopinComponent,
    FilarianeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        StoreService,
        ConnectionBackofficeService,
        CategoriesService
      ]
    };
  }
}
