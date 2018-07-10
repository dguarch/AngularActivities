import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { LogoService } from './services/logo.service';
import { TareaService } from './services/tarea.service';
import { ProyectoService } from './services/proyecto.service';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    TareasComponent,
    HeaderComponent,
    SectionComponent,
    LogoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogoService,
    TareaService,
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
