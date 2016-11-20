import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './reducer';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { NavComponent } from './components/nav.component';
import { LoginComponent } from './components/login.component';
import { GestionComponent } from './components/gestion.component';
import { SeleccionarEmpresaComponent } from './components/seleccionar-empresa.component';
import { NuevaEmpresaComponent } from './components/nueva-empresa.component';
import { TablasComponent } from './components/tablas.component';
import { InformesComponent } from './components/informes.component';

import { routing } from './app.routing';
import { Servidor } from './services/servidor.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MaterialModule,
    //StoreModule.provideStore({ lists: reducer })
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    GestionComponent,
    SeleccionarEmpresaComponent,
    NuevaEmpresaComponent,
    TablasComponent,
    InformesComponent
  ],
  providers: [
    Servidor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
