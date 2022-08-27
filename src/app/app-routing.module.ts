import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoplanetsComponent } from './pages/exoplanets/exoplanets.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "exoplanets",
    component: ExoplanetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
