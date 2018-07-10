import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './header/logo/logo.component';
import { CarritoComponent } from './header/carrito/carrito.component';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CarritoComponent,
    SectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
