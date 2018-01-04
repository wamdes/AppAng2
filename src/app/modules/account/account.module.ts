import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES_ACCOUNT } from './account-routing.module';
import { AccountComponent } from './components/account.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ROUTES_ACCOUNT
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
