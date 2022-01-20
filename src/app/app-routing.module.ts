import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { Demo04Component } from './demo/demo04/demo04.component';
import { Demo05Component } from './demo/demo05/demo05.component';
import { Demo06Component } from './demo/demo06/demo06.component';
import { Demo07Component } from './demo/demo07/demo07.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { Exo02Component } from './exos/exo02/exo02.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  
  { path: "demo", children: [
    { path: "demo01", component: Demo01Component },
    { path: "demo02", component: Demo02Component },
    { path: "demo03", component: Demo03Component },
    { path: "demo04", component: Demo04Component },
    { path: "demo05", component: Demo05Component },
    { path: "demo06", component: Demo06Component },
    { path: "demo07", component: Demo07Component },
  ] },

  { path: "exos", children: [
    { path: "exo01", component: Exo01Component },
    { path: "exo02", component: Exo02Component },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
