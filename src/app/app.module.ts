import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/**
 * routes
 */
import { ROUTES } from './app.routes';
/**
 * components
 */
import { AppRootComponent } from './components/root/app-root.component';
import { HeaderComponent } from './components/header/header.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { PersoComponent } from './components/perso/perso.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * pipes
 */

/**
 * providers
 */
import {SharedModule} from './modules/shared/shared.module';
import { PopinComponent } from './components/popin/popin.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppRootComponent,
    HeaderComponent,
    FavorisComponent,
    PersoComponent,
    FooterComponent,
    PopinComponent,
    TooltipComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule {
  constructor() {}
}
