import { Component, OnInit ,ViewChild,HostListener } from '@angular/core';
import {  AgmMap,AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
	title: string = 'My first AGM project';
	lat: number = 10.025810237149164;
	lng: number = 76.31248180688476;
	zoom: number = 8;
	@ViewChild(AgmMap) private myMap: any;
	constructor(private mapsAPILoader: MapsAPILoader) { }

	ngOnInit() {
	}

}
