import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccueilComponent } from './components/accueil/accueil.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'Accueil',
    pathMatch: 'full',
  },
  {
    path: 'Accueil',
    component: AccueilComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ];

  @NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
