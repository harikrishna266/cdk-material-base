import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {    MatAutocompleteModule,
            MatSidenavModule, 
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule, 
            MatToolbarModule,
            MatDatepickerModule,
            MatRadioModule,
            MatNativeDateModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';

import { TablesModule } from './tables/tables.module';
import { MapsModule } from './maps/maps.module'
import { ChartsModule } from './charts/charts.module';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';





export const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    DashboardModule,
    MapsModule,
    TablesModule,
    ChartsModule,
    PagesModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
