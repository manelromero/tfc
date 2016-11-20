import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
import { GestionComponent } from './components/gestion.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'gestion', component: GestionComponent},
  {path: '**', component: GestionComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
