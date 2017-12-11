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
import { SidebarComponent } from './components/sidebar/sidebar.component';

/**
 * pipes
 */

/**
 * providers
 */
import {SharedModule} from './modules/shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppRootComponent,
    HeaderComponent,
    FavorisComponent,
    PersoComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent
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
