import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
	{ path: 'googlemap', component: GoogleMapComponent }
  ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    })
  ],
  declarations: [GoogleMapComponent]
})
export class MapsModule { }
