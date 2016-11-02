import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './reducer';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';
import { LoginComponent } from './components/login.component';
import { GestionComponent } from './components/gestion.component';

import { routing } from './app.routing';

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
    GestionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
