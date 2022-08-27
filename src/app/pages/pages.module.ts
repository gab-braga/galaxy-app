import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExoplanetsComponent } from './exoplanets/exoplanets.component';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { MaterialModule } from '../shared/material/material.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExoplanetsComponent,
    DetailsDialogComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    ExoplanetsComponent,
    DetailsDialogComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
