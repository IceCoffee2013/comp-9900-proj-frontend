import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/1',
    pathMatch:'full'
  },
  {
    path: ':page',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
