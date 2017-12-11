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


@NgModule({
  declarations: [],
  exports: [],
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
