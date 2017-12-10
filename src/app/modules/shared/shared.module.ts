import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Common services dependencies
 */
import { StoreService } from '../../common/services/store.service';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


/**
 * Guards
 */

/**
 * pipes
 */


@NgModule({
  declarations: [
    CardComponent,
    SidebarComponent
  ],
  exports: [
    CardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [StoreService]
    };
  }
}
