import { Component,OnInit, AfterViewInit,ViewChild  } from '@angular/core';
declare const document;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    sidenavWidth = 4;
    open: boolean = false;
    @ViewChild('container') private _container;
    public showMenu: boolean = true;
    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit() {

    }
    toggle() {
        //ugly fix for now, material should come up with better ways to fix this
        setTimeout(() => {
                
        });
        this._container._ngZone.onMicrotaskEmpty.subscribe(() => {
            this._container._updateContentMargins();
            this._container.
            this._container._changeDetectorRef.markForCheck();
        })
        
    }

}
