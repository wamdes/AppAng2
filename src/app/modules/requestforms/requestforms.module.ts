import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMouvComponent } from './components/form-mouv/form-mouv.component';
import { FormReclaComponent } from './components/form-recla/form-recla.component';
import { FormHorscatComponent } from './components/form-horscat/form-horscat.component';
/**
 * ROUTES
 */
import { ROUTES_REQFORMS} from './requestforms.routes';
/**
 * shared dependencies
 */
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ROUTES_REQFORMS,
    SharedModule

  ],
  declarations: [FormMouvComponent, FormReclaComponent, FormHorscatComponent]
})
export class RequestformsModule { }
