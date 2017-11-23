import { Component, OnInit } from '@angular/core';
import { menujson } from './menu-json';

@Component({
    selector: 'cdk-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent{

    public menus = menujson; 
    constructor() { }

    ngOnInit() {
    }
    menuChange(row) {
    	for (let menu of this.menus) {
    		for (let submenu of menu.sub) {
    			if (submenu.name == row.name) {
    				submenu.open = true;
    			} else {
    				submenu.open = false;
    			}
    		}
    	}
    }

}
