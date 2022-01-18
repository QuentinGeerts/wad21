import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "demo/demo01", component: Demo01Component },
  { path: "demo", children: [
    { path: "demo01", component: Demo01Component },
  ] },
  { path: "exos", children: [
    { path: "exo01", component: Exo01Component }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
