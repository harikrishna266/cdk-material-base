import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ChartjsComponent } from './chartjs/chartjs.component';
export const ROUTES: Routes = [
  { path: 'chartjs', component: ChartjsComponent },]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    FlexLayoutModule,
  ],
  declarations: [ChartjsComponent],
  

})
export class ChartsModule { }
