import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
